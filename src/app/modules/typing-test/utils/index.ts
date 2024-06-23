import { Key, Layout } from "../../keyboard/types";

const isCharacterKeyboardKey = (
  character: string,
  layout: Layout,
): character is Key => !!layout.keyMap[character as Key];

export const emulateLayout = (
  newInputValue: string,
  prevInputValue: string,
  layout: Layout,
): string => {
  // Backspace was pressed
  if (newInputValue.length < prevInputValue.length) return newInputValue;

  const lastInputCharacter = newInputValue.slice(-1);
  // If it is a character that isn't mapped in the layout, return it without mapping
  if (!isCharacterKeyboardKey(lastInputCharacter, layout)) return newInputValue;

  const inputWithoutLastCharacter = newInputValue.slice(0, -1);
  const emulatedLastCharacter = layout.keyMap[lastInputCharacter];
  return `${inputWithoutLastCharacter}${emulatedLastCharacter}`;
};
