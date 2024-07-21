"use client";

import { useMemo } from "react";
import { QWERTY_KEYBOARD } from "./constants";
import { KeyboardKey } from "./keyboard-key";
import { KeyboardRow } from "./keyboard-row";
import { Box, VStack } from "@chakra-ui/react";
import { Key, Layout } from "./types";

interface KeyboardProps {
  layout: Layout;
  onKeyboardKeyClick?: (keyToEditConfig: {
    coordinates: string;
    value: Key;
  }) => void;
  focusedKey?: {
    coordinates: string;
    value: Key;
  };
}

export const Keyboard = ({
  layout,
  onKeyboardKeyClick,
  focusedKey,
}: KeyboardProps) => {
  const keyboardRows = useMemo(
    () =>
      QWERTY_KEYBOARD.map((qwertyRow, rowIndex) =>
        qwertyRow.map((qwertyKey, keyIndex) => ({
          ...qwertyKey,
          value: layout.keyMap[rowIndex][keyIndex].value,
        })),
      ),
    [layout],
  );

  return (
    <VStack gap={1.5}>
      {keyboardRows.map((keyboardRow, i) => (
        <KeyboardRow
          key={i}
          keyboardRow={keyboardRow}
          rowIndex={i}
          onKeyboardKeyClick={onKeyboardKeyClick}
          focusedKey={focusedKey}
        />
      ))}
      <Box ml="37rem" w="100%">
        <KeyboardKey
          focused={false}
          value="space"
          label=" "
          size="6u"
          onClick={() => undefined}
        />
      </Box>
    </VStack>
  );
};
