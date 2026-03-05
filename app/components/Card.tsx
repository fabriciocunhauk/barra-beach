import React from "react";
import { classNames } from "../utils/appearance";

type CardProps = {
  children: React.ReactNode;
  variant?: "feature" | "image" | "simple";
  classes?: { card?: string };
  className?: string;
  onClick?: () => void;
};

const Card: React.FC<CardProps> = ({ 
  children, 
  variant = "simple", 
  classes,
  className,
  onClick 
}) => {
  const baseClasses = "transition-all duration-300";
  
  const variants = {
    simple: "bg-white p-4 shadow-lg hover:shadow-xl rounded-lg",
    feature: "bg-white p-6 rounded-[32px] shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:shadow-xl",
    image: "group relative rounded-[48px] overflow-hidden shadow-2xl",
  };

  return (
    <div
      className={classNames(
        baseClasses,
        variants[variant],
        classes?.card,
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
