"use client";

import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const TextInput = ({
  className,
  ...props
}: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) => (
  <input
    className={twMerge(
      "block w-full rounded border-none bg-white py-1.5 px-3 text-sm/6 text-black",
      className,
    )}
    type="text"
    {...props}
  />
);
