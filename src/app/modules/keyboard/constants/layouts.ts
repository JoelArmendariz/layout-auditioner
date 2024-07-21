import { DVORAK_KEYBOARD, QWERTY_KEYBOARD } from ".";
import { Layout } from "../types";

export const QWERTY_LAYOUT: Layout = {
  name: "QWERTY",
  keyMap: QWERTY_KEYBOARD,
};

export const DVORAK_LAYOUT: Layout = {
  name: "Dvorak",
  keyMap: DVORAK_KEYBOARD,
};
