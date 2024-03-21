import React from "react";
import "./styles.css";

export interface ButtonCssProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md";
  children: React.ReactNode;
  isDisabled?: boolean;
}

export const ButtonCss = ({
  variant = "primary",
  size = "md",
  children,
  isDisabled,
  ...props
}: ButtonCssProps) => {
  return (
    <button
      className={`button ${variant} ${size}`}
      {...props}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

ButtonCss.displayName = "ButtonCss";
