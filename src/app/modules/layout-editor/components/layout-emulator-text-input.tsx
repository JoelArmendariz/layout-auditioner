"use client";

import { ChangeEvent, useState } from "react";
import { useKeyboardContext } from "../../keyboard/context/keyboard-provider";
import { emulateLayout } from "../utils";
import { Input } from "@chakra-ui/react";

interface LayoutEmulatorTextInputProps {
  onChange?: (value: string) => void;
}

export const LayoutEmulatorTextInput = ({
  onChange,
}: LayoutEmulatorTextInputProps) => {
  const [inputValue, setInputValue] = useState("");
  const { activeLayout } = useKeyboardContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const emulatedInput = emulateLayout(
      e.target.value,
      inputValue,
      activeLayout,
    );
    setInputValue(emulatedInput);
    onChange?.(emulatedInput);
  };

  return (
    <Input
      placeholder="Test your layout..."
      onChange={handleChange}
      value={inputValue}
    />
  );
};
