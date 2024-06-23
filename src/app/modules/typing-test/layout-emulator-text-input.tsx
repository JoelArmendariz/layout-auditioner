"use client";

import { TextInput } from "@/components/text-input";
import { ChangeEvent, useState } from "react";
import { useKeyboardContext } from "../keyboard/context/keyboard-provider";
import { emulateLayout } from "./utils";

interface LayoutEmulatorTextInputProps {
  onChange?: (value: string) => void;
}

export const LayoutEmulatorTextInput = ({
  onChange,
}: LayoutEmulatorTextInputProps) => {
  const [inputValue, setInputValue] = useState("");
  const { layout } = useKeyboardContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const emulatedInput = emulateLayout(e.target.value, inputValue, layout);
    setInputValue(emulatedInput);
    onChange?.(emulatedInput);
  };

  return <TextInput onChange={handleChange} value={inputValue} />;
};
