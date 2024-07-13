import { HStack } from "@chakra-ui/react";
import { KeyboardKey } from "./keyboard-key";
import { KeyboardKeyConfig } from "./types";

interface KeyboardRowProps {
  keyboardRow: KeyboardKeyConfig[];
}

export const KeyboardRow = ({ keyboardRow }: KeyboardRowProps) => (
  <HStack gap={1.5}>
    {keyboardRow.map((keyboardKey, i) => (
      <KeyboardKey key={i} {...keyboardKey} />
    ))}
  </HStack>
);
