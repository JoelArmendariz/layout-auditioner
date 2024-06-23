"use client";

import { Keyboard } from "../modules/keyboard";
import { KeyboardProvider } from "../modules/keyboard/context/keyboard-provider";
import { TypingTest } from "../modules/typing-test";

const Test = () => (
  <KeyboardProvider>
    <main className="flex flex-col items-center p-24 space-y-8">
      <TypingTest />
      <Keyboard />
    </main>
  </KeyboardProvider>
);
export default Test;
