import React from "react";

type ButtonVariant = "primary";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary hover:bg-secondary",
};

const sizeStyles: Record<ButtonSize, string> = {
  small: "px-4 py-2 text-sm",
  medium: "px-6 py-3 text-base",
  large: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "medium",
  className = "",
  ...props
}: ButtonProps) {
  const buttonClasses = `
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    transition-colors duration-300 text-white font-medium cursor-pointer
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}
