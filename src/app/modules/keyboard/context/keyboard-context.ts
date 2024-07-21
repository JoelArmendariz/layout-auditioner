import { createContext } from "react";
import { Layout } from "../types";
import { QWERTY_LAYOUT } from "../constants/layouts";

interface KeyboardContextState {
  activeLayout: Layout;
  setActiveLayout: (layoutName: string) => void;
  saveNewLayout: (newLayoutName: string) => void;
  editLayout: (updatedLayout: Layout) => void;
  deleteLayout: (layoutToDelete: string) => void;
  layouts: Layout[];
}

export const KeyboardContext = createContext<KeyboardContextState>({
  activeLayout: QWERTY_LAYOUT,
  setActiveLayout: () => undefined,
  saveNewLayout: () => undefined,
  editLayout: () => undefined,
  deleteLayout: () => undefined,
  layouts: [],
});
