import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../../../components/ui/button";
import { Card } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import {
  CustomSelect,
  SelectContent,
  SelectItem,
} from "../../../components/ui/select";

export const FormSection = () => {
  const { t } = useTranslation();
  const [nameError, setNameError] = React.useState<string>("");
  const [nameValue, setNameValue] = React.useState<string>("");
  const [nameTouched, setNameTouched] = React.useState<boolean>(false);
  const [emailError, setEmailError] = React.useState<string>("");
  const [emailValue, setEmailValue] = React.useState<string>("");
  const [emailTouched, setEmailTouched] = React.useState<boolean>(false);
  const [serviceError, setServiceError] = React.useState<string>("");
  const [serviceTouched, setServiceTouched] = React.useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = React.useState<string>("");

  // Contact method options data
  const contactOptions = [
    {
      icon: "/group-2.svg",
      text: t('form.contact.telegram'),
    },
    {
      icon: "/vector.svg",
      text: t('form.contact.whatsapp'),
    },
  ];

  const tariffLabels: Record<string, string> = {
    visa: 'Тариф Базовый',
    citizenship: 'Тариф Стандарт',
    consultation: 'Консультация',
    other: 'Другое',
  };

  const validateName = (value: string): string => {
    if (value.length === 0) return "";
    
    // Проверяем, что только буквы
    if (!/^[а-яёА-ЯЁa-zA-Z\s-]+$/.test(value)) {
      return t('form.errors.name_invalid');
    }
    
    // Проверяем максимальную длину
    if (value.length > 52) {
      return t('form.errors.name_too_long');
    }
    
    return "";
  };

  const validateEmail = (value: string): string => {
    if (value.length === 0) return "";
    
    // Проверяем email маску
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(value)) {
      return t('form.errors.email_invalid');
    }
    
    // Проверяем максимальную длину
    if (value.length > 100) {
      return t('form.errors.email_too_long');
    }
    
    return "";
  };

  const validateService = (value: string): string => {
    if (value.length === 0) return "";
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
    // setSelectedTariff(value); // This line was removed as per the new_code
    if (serviceTouched) {
      const error = validateService(value);
      setServiceError(error);
    }
  };

  const handleServiceBlur = () => {
    setServiceTouched(true);
    const error = validateService(/* selectedTariff */ "consultation"); // This line was changed as per the new_code
    setServiceError(error);
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
    if (hasError) return;
    setSubmitStatus("Отправка...");
    try {
      const response = await fetch("https://telegram-contact-worker.nekiteth.workers.dev/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nameValue,
          email: emailValue,
          message: /* selectedTariff */ "consultation" ? `Тариф: ${tariffLabels["consultation"] || "Консультация"}` : undefined, // This line was changed as per the new_code
          formType: 'consultation',
        })
      });
      if (response.ok) {
        setSubmitStatus(t('form.success.submitted'));
        setNameValue("");
        setEmailValue("");
        // setSelectedTariff(""); // This line was removed as per the new_code
        setNameTouched(false);
        setEmailTouched(false);
        setServiceTouched(false);
      } else {
        const data = await response.json().catch(() => ({}));
        setSubmitStatus(data.message ? `${t('form.errors.error')}: ${data.message}` : t('form.errors.submission_error'));
      }
    } catch (error: any) {
      setSubmitStatus(error?.message ? `${t('form.errors.network_error')}: ${error.message}` : t('form.errors.network_error_generic'));
    }
  };

  return (
    <section id="services" className="gap-6 px-6 py-12 md:pt-16 md:pb-16 bg-[#31419980] flex flex-col items-stretch relative w-full backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)]">
      <div className="w-full md:max-w-[1600px] md:mx-auto md:px-16">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full items-start">
      <img 
          src={`${import.meta.env.BASE_URL}logo_horiz.svg`} 
        alt="EasyWay Logo" 
          className="w-[164px] h-[46px] self-start"
      />

        <h1 className="self-stretch font-font-h-1 text-font-h-1 text-[#f3fcf0]">
        {t('form.consultation.title')}
      </h1>

        <h2 className="self-stretch font-font-h-2 text-font-h-2 text-[#f3fcf0]">
          {t('form.consultation.subtitle')}
      </h2>

      <Input
          placeholder={t('form.fields.name')}
          value={nameValue}
          onChange={handleNameChange}
          onBlur={handleNameBlur}
          error={nameTouched ? nameError : ""}
          maxLength={52}
          className="w-full md:w-[500px]"
        />

        <Input
          placeholder={t('form.fields.email')}
          value={emailValue}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          error={emailTouched ? emailError : ""}
          maxLength={100}
          className="w-full md:w-[500px]"
        />

        <CustomSelect
          placeholder={t('form.consultation.interest_placeholder')}
          // value={selectedTariff} // This line was removed as per the new_code
          onValueChange={handleServiceChange}
          onBlur={handleServiceBlur}
          error={serviceTouched ? serviceError : ""}
          className="w-full md:w-[500px]"
        >
          <SelectContent>
            <SelectItem value="visa">{t('form.consultation.options.basic')}</SelectItem>
            <SelectItem value="citizenship">{t('form.consultation.options.standard')}</SelectItem>
            <SelectItem value="consultation">{t('form.consultation.options.consultation')}</SelectItem>
            <SelectItem value="other">{t('form.consultation.options.other')}</SelectItem>
          </SelectContent>
        </CustomSelect>

        <Button variant="accent" size="full" className="text-black w-full md:w-[500px]" type="submit">
        {t('form.consultation.button')}
      </Button>
      {submitStatus && (
        <div className="text-white text-center mt-2">{submitStatus}</div>
      )}

        <div className="w-full md:w-[500px] text-center md:text-center font-font-body text-font-body text-white text-lg tracking-[-0.18px] mb-2">
          — {t('form.or_simply')} —
        </div>

        <div className="flex flex-col items-start gap-4 w-full md:ml-0">
          {contactOptions.map((option, index) => {
            const href =
              index === 0
                ? "https://t.me/EWE_Chat"
                : "https://api.whatsapp.com/send/?phone=359886173334&text&type=phone_number&app_absent=0";
            return (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Card
                  className="flex items-center gap-3 px-4 w-full md:w-[500px] h-[60px] bg-[#0000004f] rounded overflow-hidden backdrop-blur-[32px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(32px)_brightness(100%)] border-none cursor-pointer font-font-body text-font-body hover:bg-white/10 hover:shadow-lg hover:text-[#ffd23f] focus-visible:ring-2 focus-visible:ring-[#ffd23f] focus-visible:ring-offset-2 transition-all duration-200"
                >
                  <img 
                    src={index === 0 ? `${import.meta.env.BASE_URL}telegram-icon.svg` : `${import.meta.env.BASE_URL}whatsapp-icon.svg`} 
                    alt={option.text} 
                    className="w-8 h-8"
                  />
                  <div className="flex-1 text-center font-bold text-[#f3fcf0] text-[20px]">
                    {option.text}
                  </div>
                </Card>
              </a>
            );
          })}
        </div>
        </form>
      </div>
    </section>
  );
};
