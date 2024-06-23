"use client";

import { useMemo } from "react";
import { QWERTY_KEYBOARD } from "./constants";
import { KeyboardKey } from "./keyboard-key";
import { KeyboardRow } from "./keyboard-row";
import { useKeyboardContext } from "./context/keyboard-provider";

export const Keyboard = () => {
  const { layout } = useKeyboardContext();

  const keyboardRows = useMemo(
    () =>
      QWERTY_KEYBOARD.map((keyboardRow) =>
        keyboardRow.map((keyboardKey) => ({
          ...keyboardKey,
          value: layout.keyMap[keyboardKey.value],
        })),
      ),
    [layout],
  );

  return (
    <div className="space-y-1.5">
      {keyboardRows.map((keyboardRow, i) => (
        <KeyboardRow key={i} keyboardRow={keyboardRow} />
      ))}
      <div className="ml-[18.75rem]">
        <KeyboardKey value="space" label=" " size="6u" />
      </div>
    </div>
  );
};
