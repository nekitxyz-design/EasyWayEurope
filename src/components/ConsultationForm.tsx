import React from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import {
  CustomSelect,
  SelectContent,
  SelectItem,
} from "./ui/select";

interface ConsultationFormProps {
  title: string;
  subtitle: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  selectPlaceholder: string;
  buttonText: string;
  textareaEnabled?: boolean;
  textareaLabel?: string;
  textareaPlaceholder?: string;
  textareaRequired?: boolean;
  contactOptions?: { icon: string; text: string; href: string }[];
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  title,
  subtitle,
  namePlaceholder,
  emailPlaceholder,
  selectPlaceholder,
  buttonText,
  textareaEnabled = false,
  textareaLabel = "",
  textareaPlaceholder = "",
  textareaRequired = false,
  contactOptions = [],
}) => {
  const [nameError, setNameError] = React.useState<string>("");
  const [nameValue, setNameValue] = React.useState<string>("");
  const [nameTouched, setNameTouched] = React.useState<boolean>(false);
  const [emailError, setEmailError] = React.useState<string>("");
  const [emailValue, setEmailValue] = React.useState<string>("");
  const [emailTouched, setEmailTouched] = React.useState<boolean>(false);
  const [selectedService, setSelectedService] = React.useState<string>("");
  const [serviceError, setServiceError] = React.useState<string>("");
  const [serviceTouched, setServiceTouched] = React.useState<boolean>(false);
  const [textareaValue, setTextareaValue] = React.useState<string>("");
  const [textareaError, setTextareaError] = React.useState<string>("");
  const [textareaTouched, setTextareaTouched] = React.useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = React.useState<string>("");

  const validateName = (value: string): string => {
    if (value.length === 0) return "";
    if (!/^[а-яёА-ЯЁa-zA-Z\s-]+$/.test(value)) {
      return "Имя может содержать только буквы, пробелы и дефисы";
    }
    if (value.length > 52) {
      return "Имя не может быть длиннее 52 символов";
    }
    return "";
  };

  const validateEmail = (value: string): string => {
    if (value.length === 0) return "";
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(value)) {
      return "Введите корректный email адрес";
    }
    if (value.length > 100) {
      return "Email не может быть длиннее 100 символов";
    }
    return "";
  };

  const validateService = (value: string): string => {
    if (value.length === 0) return "";
    return "";
  };

  const validateTextarea = (value: string): string => {
    if (textareaRequired && !value.trim()) {
      return "Обязательное поле";
    }
    return "";
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNameValue(value);
    if (nameTouched) {
      const error = validateName(value);
      setNameError(error);
    }
  };

  const handleNameBlur = () => {
    setNameTouched(true);
    const error = validateName(nameValue);
    setNameError(error);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmailValue(value);
    if (emailTouched) {
      const error = validateEmail(value);
      setEmailError(error);
    }
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
    const error = validateEmail(emailValue);
    setEmailError(error);
  };

  const handleServiceChange = (value: string) => {
    setSelectedService(value);
    if (serviceTouched) {
      const error = validateService(value);
      setServiceError(error);
    }
  };

  const handleServiceBlur = () => {
    setServiceTouched(true);
    const error = validateService(selectedService);
    setServiceError(error);
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(e.target.value);
    if (textareaTouched) {
      setTextareaError(validateTextarea(e.target.value));
    }
  };

  const handleTextareaBlur = () => {
    setTextareaTouched(true);
    setTextareaError(validateTextarea(textareaValue));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;
    if (!nameValue.trim()) {
      setNameError("Обязательное поле");
      setNameTouched(true);
      hasError = true;
    }
    if (!emailValue.trim()) {
      setEmailError("Обязательное поле");
      setEmailTouched(true);
      hasError = true;
    }
    if (textareaEnabled && textareaRequired && !textareaValue.trim()) {
      setTextareaError("Обязательное поле");
      setTextareaTouched(true);
      hasError = true;
    }
    if (hasError) return;
    setSubmitStatus("Отправка...");
    try {
      const serviceLabels: Record<string, string> = {
        visa: 'Тариф Базовый',
        citizenship: 'Тариф Стандарт',
        consultation: 'Консультация',
        other: 'Другое',
      };
      const response = await fetch("https://telegram-contact-worker.nekiteth.workers.dev/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nameValue,
          email: emailValue,
          message: textareaEnabled && textareaValue.trim() ? textareaValue : (selectedService ? `Тариф: ${serviceLabels[selectedService] || selectedService}` : undefined),
          formType: textareaEnabled ? 'faq' : 'consultation',
        })
      });
      if (response.ok) {
        setSubmitStatus("Спасибо! Ваша заявка отправлена.");
        setNameValue("");
        setEmailValue("");
        setTextareaValue("");
        setNameTouched(false);
        setEmailTouched(false);
        setTextareaTouched(false);
      } else {
        const data = await response.json().catch(() => ({}));
        setSubmitStatus(data.message ? `Ошибка: ${data.message}` : "Ошибка при отправке. Попробуйте позже.");
      }
    } catch (error: any) {
      setSubmitStatus(error?.message ? `Ошибка сети: ${error.message}` : "Ошибка сети. Попробуйте позже.");
    }
  };

  // Авто-рост textarea
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  React.useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  }, [textareaValue]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <h1 className="self-stretch font-font-h-1 text-font-h-1 text-[#f3fcf0]">
        {title}
      </h1>
      <h2 className="self-stretch font-font-h-2 text-font-h-2 text-[#f3fcf0]">
        {subtitle}
      </h2>
      <Input
        placeholder={namePlaceholder}
        value={nameValue}
        onChange={handleNameChange}
        onBlur={handleNameBlur}
        error={nameTouched ? nameError : ""}
        maxLength={52}
      />
      <Input
        placeholder={emailPlaceholder}
        value={emailValue}
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
        error={emailTouched ? emailError : ""}
        maxLength={100}
      />
      {/* Селект убран для модалки FAQ */}
      {textareaEnabled && (
        <div className="relative">
          {textareaLabel && (
            <label className="absolute left-4 top-2 text-xs text-white/70 pointer-events-none">
              {textareaLabel}
            </label>
          )}
          <textarea
            ref={textareaRef}
            rows={2}
            className="flex w-full border bg-transparent text-base shadow-sm transition-all duration-200 px-4 pt-6 pb-2 rounded-none font-font-body text-font-body text-white placeholder:text-white/50 resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0023e9] border-input hover:border-white/50 focus-visible:border-white/50"
            placeholder={textareaPlaceholder}
            value={textareaValue}
            onChange={handleTextareaChange}
            onBlur={handleTextareaBlur}
            maxLength={300}
            style={{ minHeight: 56, maxHeight: 200 }}
          />
          {textareaTouched && textareaError && (
            <p className="mt-1 font-font-body-s text-font-body-s text-white text-sm">
              {textareaError}
            </p>
          )}
        </div>
      )}
      <Button variant="accent" size="full" className="text-black" type="submit">
        {buttonText}
      </Button>
      {submitStatus && (
        <div className="text-white text-center mt-2">{submitStatus}</div>
      )}
      {contactOptions.length > 0 && (
        <div className="self-stretch font-font-body text-font-body text-white text-lg text-center tracking-[-0.18px]">
          — или просто&nbsp;&nbsp;—
        </div>
      )}
      {contactOptions.length > 0 && (
        <div className="flex flex-col items-start gap-4 w-full">
          {contactOptions.map((option, index) => (
            <a
              key={index}
              href={option.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Card
                className="flex items-center justify-center gap-2 px-4 py-3 w-full bg-[#0000004f] rounded overflow-hidden backdrop-blur-[32px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(32px)_brightness(100%)] border-none cursor-pointer font-font-body text-font-body hover:bg-white/10 hover:shadow-lg hover:text-[#ffd23f] focus-visible:ring-2 focus-visible:ring-[#ffd23f] focus-visible:ring-offset-2 transition-all duration-200"
              >
                <img
                  src={option.icon}
                  alt={option.text}
                  className="w-8 h-8"
                />
                <div className="w-[228px] font-font-body text-font-body text-[#f3fcf0] text-[22px] tracking-[-0.22px] text-center">
                  {option.text}
                </div>
              </Card>
            </a>
          ))}
        </div>
      )}
    </form>
  );
}; 