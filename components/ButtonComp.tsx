import { type ButtonHTMLAttributes, type ReactNode } from "react";

type buttonVariant = "regular" | "outline" | "ghost" | "link";
type buttonSize = "regular" | "large" | "small";
type fullWidth = boolean;

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: buttonSize;
  variant?: buttonVariant;
  children: ReactNode;
  fullWidth?: fullWidth;
}
const ButtonComp = ({
  size = "regular",
  variant = "regular",
  children,
  className,
  fullWidth = false,
  ...props
}: Props) => {
  return (
    <button
      className={`${
        fullWidth ? "w-full" : "w-fit"
      } h-fit rounded-lg text-xs font-medium transition-all 
        ${size === "large" ? "px-5 py-3 text-base" : ""} 
        ${size === "regular" ? "px-4 py-2 text-sm" : ""} 
        ${size === "small" ? "px-2 py-2" : ""} 
        ${
          variant === "regular"
            ? "bg-bright-blue text-white hover:bg-bright-blue"
            : ""
        } 
        ${
          variant === "outline"
            ? "border border-dark-grey text-dark-grey hover:border-coral-orange hover:bg-off-blue"
            : ""
        } 
        ${
          variant === "ghost"
            ? "text-slate-gray hover:bg-slate-gray disabled:hover:bg-transparent"
            : ""
        } 
        ${variant === "link" ? "text-bright-blue hover:underline" : ""}
        ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonComp;
