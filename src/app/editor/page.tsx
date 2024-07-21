"use client";

import { VStack } from "@chakra-ui/react";
import { KeyboardProvider } from "../modules/keyboard/context/keyboard-provider";
import { LayoutEditor } from "../modules/layout-editor";

const Editor = () => {
  return (
    <VStack h="calc(100% - 3rem)" alignItems="center" justifyContent="center">
      <KeyboardProvider>
        <LayoutEditor />
      </KeyboardProvider>
    </VStack>
  );
};

export default Editor;
