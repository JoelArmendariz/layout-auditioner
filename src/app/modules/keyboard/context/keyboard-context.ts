import { createContext } from "react";
import { Layout } from "../types";
import { QWERTY_LAYOUT } from "../constants/layouts";

interface KeyboardContextState {
  activeLayout: Layout;
  setActiveLayout: (layoutName: string) => void;
  saveNewLayout: (newLayoutName: string) => void;
  deleteLayout: (layoutToDelete: string) => void;
  layouts: Layout[];
}

export const KeyboardContext = createContext<KeyboardContextState>({
  activeLayout: QWERTY_LAYOUT,
  setActiveLayout: () => undefined,
  saveNewLayout: () => undefined,
  deleteLayout: () => undefined,
  layouts: [],
});
