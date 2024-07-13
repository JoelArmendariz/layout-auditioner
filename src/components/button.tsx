import { Button as HeadlessButton } from "@headlessui/react";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type Variant = "primary" | "secondary" | "success";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  variant?: Variant;
}

export const Button = ({
  className,
  children,
  onClick,
  variant = "primary",
}: PropsWithChildren<ButtonProps>) => {
  const backgroundColorVariantMap: Record<Variant, string> = {
    primary:
      "bg-primary data-[hover]:bg-primary-hover data-[active]:bg-primary-active",
    secondary:
      "bg-secondary data-[hover]:bg-secondary-hover data-[active]:bg-secondary-active",
    success:
      "bg-success data-[hover]:bg-success-hover data-[active]:bg-success-active",
  };

  return (
    <HeadlessButton
      className={twMerge(
        "rounded py-2 px-4 text-sm text-white",
        backgroundColorVariantMap[variant],
        className,
      )}
      onClick={onClick}
    >
      {children}
    </HeadlessButton>
  );
};
