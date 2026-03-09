import { twMerge } from "tailwind-merge";

export function classNames(...classes: (string | boolean | undefined | null)[]) {
  return twMerge(classes.filter(Boolean).join(" ").trim());
}