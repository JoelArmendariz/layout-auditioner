"use client";

import { useMemo } from "react";
import { QWERTY_KEYBOARD } from "./constants";
import { KeyboardKey } from "./keyboard-key";
import { KeyboardRow } from "./keyboard-row";
import { useKeyboardContext } from "./context/keyboard-provider";
import { Box, VStack } from "@chakra-ui/react";

export const Keyboard = () => {
  const { activeLayout } = useKeyboardContext();

  const keyboardRows = useMemo(
    () =>
      QWERTY_KEYBOARD.map((keyboardRow) =>
        keyboardRow.map((keyboardKey) => ({
          ...keyboardKey,
          value: activeLayout.keyMap[keyboardKey.value],
        })),
      ),
    [activeLayout],
  );

  return (
    <VStack gap={1.5}>
      {keyboardRows.map((keyboardRow, i) => (
        <KeyboardRow key={i} keyboardRow={keyboardRow} />
      ))}
      <Box ml="37rem" w="100%">
        <KeyboardKey value="space" label=" " size="6u" />
      </Box>
    </VStack>
  );
};
