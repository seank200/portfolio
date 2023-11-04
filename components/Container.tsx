import { type ReactNode } from "react";

export const containerClass = "mx-auto w-full max-w-7xl px-8 md:px-12 2xl:px-0";

export default function Container({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`${containerClass} ${className || ""}`}>{children}</div>
  );
}
