"use client";

import { VStack } from "@chakra-ui/react";
import { EditorToolbar } from "../modules/editor-toolbar";
import { Keyboard } from "../modules/keyboard";
import { KeyboardProvider } from "../modules/keyboard/context/keyboard-provider";

const Editor = () => {
  return (
    <main className="flex flex-col h-full items-center justify-center p-24">
      <KeyboardProvider>
        <VStack gap="1rem">
          <EditorToolbar />
          <Keyboard />
        </VStack>
      </KeyboardProvider>
    </main>
  );
};

export default Editor;
