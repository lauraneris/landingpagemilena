// components/ui/button.tsx
import * as React from "react";

type BaseProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  as?: "button" | "a";
};

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type ButtonAsLink = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const sizeStyles: Record<NonNullable<BaseProps["size"]>, string> = {
  sm: "h-9 px-3 text-xs",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-6 text-base",
};

export function Button(props: ButtonProps) {
  const {
    size = "md",
    className = "",
    children,
    as = "button",
    ...rest
  } = props as ButtonProps;

  const sizeClass = sizeStyles[size];
  const Component = as;

  return (
    <Component
      {...(rest as any)}
      className={[
        "inline-flex items-center justify-center gap-2 rounded-full",
        "border border-[#5a14c0]/60 bg-transparent",
        "text-white font-medium",
        "hover:border-[#b8c709] hover:bg-[#5a14c0]/30",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b8c709] focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        "disabled:opacity-60 disabled:cursor-not-allowed",
        sizeClass,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Component>
  );
}
