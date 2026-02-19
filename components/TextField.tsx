import React, { forwardRef } from "react";

type TextFieldVariant = "default" | "filled" | "outlined";
type TextFieldSize = "small" | "medium" | "large";

interface TextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: TextFieldVariant;
  size?: TextFieldSize;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const variantStyles: Record<TextFieldVariant, string> = {
  default:
    "border border-gray-300 bg-white focus:border-primary focus:ring-1 focus:ring-primary",
  filled:
    "border-0 border-b-2 border-gray-300 bg-gray-100 focus:border-primary focus:bg-gray-50",
  outlined:
    "border-2 border-gray-300 bg-transparent focus:border-primary focus:ring-0",
};

const sizeStyles: Record<TextFieldSize, string> = {
  small: "px-3 py-1.5 text-sm",
  medium: "px-3 py-2 text-base",
  large: "px-4 py-3 text-lg",
};

const labelSizeStyles: Record<TextFieldSize, string> = {
  small: "text-xs mb-1",
  medium: "text-sm mb-1",
  large: "text-base mb-1.5",
};

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      error,
      helperText,
      variant = "default",
      size = "medium",
      fullWidth = false,
      startIcon,
      endIcon,
      className = "",
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || props.name || Math.random().toString(36).slice(2);

    const baseStyles =
      "rounded transition-colors duration-200 outline-none text-foreground placeholder:text-gray-400";

    const disabledStyles = disabled
      ? "opacity-50 cursor-not-allowed bg-gray-100"
      : "";

    const errorStyles = error
      ? "border-secondary focus:border-secondary focus:ring-secondary"
      : "";

    const iconPaddingStart = startIcon ? "pl-10" : "";
    const iconPaddingEnd = endIcon ? "pr-10" : "";

    const inputClasses = `
      ${baseStyles}
      ${variantStyles[variant]}
      ${sizeStyles[size]}
      ${disabledStyles}
      ${errorStyles}
      ${iconPaddingStart}
      ${iconPaddingEnd}
      ${fullWidth ? "w-full" : ""}
      ${className}
    `
      .trim()
      .replace(/\s+/g, " ");

    return (
      <div className={fullWidth ? "w-full" : ""}>
        {label && (
          <label
            htmlFor={inputId}
            className={`block font-medium text-foreground ${labelSizeStyles[size]}`}
          >
            {label}
          </label>
        )}
        <div className="relative">
          {startIcon && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {startIcon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            className={inputClasses}
            {...props}
          />
          {endIcon && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              {endIcon}
            </span>
          )}
        </div>
        {(error || helperText) && (
          <p
            className={`mt-1 text-xs ${error ? "text-secondary" : "text-gray-500"}`}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

TextField.displayName = "TextField";

export default TextField;