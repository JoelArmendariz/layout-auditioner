import { HStack } from "@chakra-ui/react";
import { KeyboardKey } from "./keyboard-key";
import { Key, KeyboardKeyConfig } from "./types";

interface KeyboardRowProps {
  keyboardRow: KeyboardKeyConfig[];
  rowIndex: number;
  onKeyboardKeyClick?: (keyToEditConfig: {
    coordinates: string;
    value: Key;
  }) => void;
  focusedKey?: {
    coordinates: string;
    value: Key;
  };
}

export const KeyboardRow = ({
  keyboardRow,
  rowIndex,
  onKeyboardKeyClick,
  focusedKey,
}: KeyboardRowProps) => (
  <HStack gap={1.5}>
    {keyboardRow.map((keyboardKey, i) => {
      const coordinates = `${rowIndex}${i}`;
      return (
        <KeyboardKey
          key={i}
          {...keyboardKey}
          onClick={() =>
            onKeyboardKeyClick?.({
              coordinates,
              value: keyboardKey.value,
            })
          }
          focused={focusedKey?.coordinates === coordinates}
        />
      );
    })}
  </HStack>
);
