import { KeyboardKey } from "./keyboard-key";
import { KeyboardKeyConfig } from "./types";

interface KeyboardRowProps {
  keyboardRow: KeyboardKeyConfig[];
}

export const KeyboardRow = ({ keyboardRow }: KeyboardRowProps) => (
  <div className="flex flex-row space-x-1.5">
    {keyboardRow.map((keyboardKey, i) => (
      <KeyboardKey key={i} {...keyboardKey} />
    ))}
  </div>
);
