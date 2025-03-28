import React from "react";
import { classNames } from "../utils/appearance";

type CardProps = {
  children: React.ReactNode;
  classes?: { card?: string };
};

function Card({ children, classes }: CardProps) {
  return (
    <div
      className={classNames(
        "bg-white p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg",
        classes?.card
      )}
    >
      {children}
    </div>
  );
}

export default Card;
