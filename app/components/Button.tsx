import { classNames } from "@/app/utils/appearance";
import Link from "next/link";
import React, { ReactNode, FC } from "react";

type ButtonProps = {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  link?: string;
  variant?: "primary" | "ghost" | "white" | "dark" | "outline";
  size?: "sm" | "md" | "lg";
  classes?: { link?: string; button?: string };
  disabled?: boolean;
  className?: string; // Support direct className too
  target?: string;
  rel?: string;
};

const Button: FC<ButtonProps> = ({
  children,
  type = "button",
  onClick,
  link,
  variant = "primary",
  size = "md",
  classes,
  disabled,
  className,
  target,
  rel,
}) => {
  const baseClasses = "flex items-center justify-center font-black uppercase tracking-widest transition-all duration-300 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-beach-sunset text-white hover:bg-beach-sunset/90 shadow-lg hover:shadow-beach-sunset/20",
    ghost: "bg-white/10 backdrop-blur-xl text-white border-2 border-white/30 hover:bg-white/20",
    white: "bg-white text-slate-900 hover:bg-beach-sunset hover:text-white shadow-xl",
    dark: "bg-slate-900 text-white hover:bg-beach-sunset shadow-xl",
    outline: "bg-transparent border-2 border-slate-200 text-slate-600 hover:border-beach-sunset hover:text-beach-sunset",
  };

  const sizes = {
    sm: "px-6 py-3 rounded-xl text-xs",
    md: "px-8 py-4 rounded-2xl text-sm",
    lg: "px-12 py-6 rounded-2xl text-lg",
  };

  const finalClasses = classNames(
    baseClasses,
    variants[variant],
    sizes[size],
    classes?.button,
    className
  );

  if (link) {
    const isExternal = link.startsWith("http") || link.startsWith("https") || link.startsWith("wa.me");
    return (
      <Link 
        href={link} 
        className={classNames(finalClasses, classes?.link)}
        target={target || (isExternal ? "_blank" : undefined)}
        rel={rel || (isExternal ? "noreferrer" : undefined)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={finalClasses}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
