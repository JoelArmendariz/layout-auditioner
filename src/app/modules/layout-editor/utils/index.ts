import { Key, Layout } from "../../keyboard/types";

const isCharacterKeyboardKey = (
  character: string,
  layout: Layout,
): character is Key =>
  !!layout.keyMap.some((layoutRow) =>
    layoutRow.some((layoutKeyConfig) => layoutKeyConfig.value === character),
  );

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

  let emulatedLastCharacter = "";
  for (const layoutRow of layout.keyMap) {
    const emulatedLastCharacterConfig = layoutRow.find(
      (layoutKeyConfig) => layoutKeyConfig.qwertyValue === lastInputCharacter,
    );
    if (emulatedLastCharacterConfig) {
      emulatedLastCharacter = emulatedLastCharacterConfig.value;
    }
  }
  return `${inputWithoutLastCharacter}${emulatedLastCharacter}`;
};
