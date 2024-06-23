import { createContext } from "react";
import { Layout } from "../types";
import { QWERTY_LAYOUT } from "../constants/layouts";

interface KeyboardContextState {
  layout: Layout;
}

export const KeyboardContext = createContext<KeyboardContextState>({
  layout: QWERTY_LAYOUT,
});
