"use client";

import { VStack } from "@chakra-ui/react";
import { KeyboardProvider } from "../modules/keyboard/context/keyboard-provider";
import { TypingTest } from "../modules/typing-test";

const Test = () => (
  <KeyboardProvider>
    <VStack h="calc(100% - 3rem)" justifyContent="center">
      <TypingTest />
    </VStack>
  </KeyboardProvider>
);
export default Test;
