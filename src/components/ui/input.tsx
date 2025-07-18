import * as React from "react";
import { cn } from "../../lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  label?: string;
  error?: string;
  onValidation?: (isValid: boolean) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, placeholder, error, onValidation, value, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const hasValue = (value as string)?.length > 0 || false;

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      props.onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      props.onChange?.(e);
    };

    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "flex w-full md:w-[280px] border bg-transparent text-base shadow-sm transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0023e9] disabled:cursor-not-allowed disabled:opacity-50 text-white !text-white placeholder:text-transparent leading-normal items-center",
            error 
              ? isFocused || hasValue 
                ? "border-red-500/50 hover:border-red-500/50 focus-visible:border-red-500/50" 
                : "border-red-500 hover:border-red-500 focus-visible:border-red-500"
              : hasValue && !isFocused
                ? "border-white hover:border-white focus-visible:border-white"
                : "border-input hover:border-white/50 focus-visible:border-white/50",
            (isFocused || hasValue || error) ? "px-4 pt-6 pb-2 rounded-none font-font-body text-font-body" : "px-4 py-4 rounded-none font-font-body text-font-body",
            className,
          )}
          ref={ref}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          {...props}
        />
        {(label || placeholder) && (
          <label
            className={cn(
              "absolute left-4 transition-all duration-200 pointer-events-none leading-none",
              (isFocused || hasValue || error)
                ? "top-2 text-xs font-font-body-s text-font-body-s !text-white/70"
                : "top-4 text-base font-font-body text-font-body !text-white"
            )}
          >
            {label || placeholder}
          </label>
        )}
        {error && (
          <p className="mt-1 font-font-body-s text-font-body-s text-white text-sm">
            {error}
          </p>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
