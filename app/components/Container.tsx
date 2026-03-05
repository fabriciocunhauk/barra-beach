import { classNames } from "@/app/utils/appearance";
import { ReactNode, type JSX } from "react";

interface ContainerProps {
  children: ReactNode;
  element?: keyof JSX.IntrinsicElements;
  classes?: { container?: string };
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
}

const sizeMap: Record<NonNullable<ContainerProps["size"]>, string> = {
  xs: "max-w-md",
  sm: "max-w-3xl",
  md: "max-w-6xl",
  lg: "max-w-7xl",
};

const Container: React.FC<ContainerProps> = ({
  children,
  element: Tag = "div",
  classes,
  size = "lg",
  className: extraClassName,
}) => {
  const className = classNames(
    "mx-auto py-4 px-10",
    sizeMap[size],
    classes?.container,
    extraClassName
  );

  return <Tag className={className}>{children}</Tag>;
};

export default Container;
