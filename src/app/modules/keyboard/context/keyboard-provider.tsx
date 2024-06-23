import { PropsWithChildren, useContext, useMemo } from "react";
import { KeyboardContext } from "./keyboard-context";
import { DVORAK_LAYOUT, QWERTY_LAYOUT } from "../constants/layouts";

export const KeyboardProvider = ({ children }: PropsWithChildren) => {
  const value = useMemo(
    () => ({
      layout: DVORAK_LAYOUT,
    }),
    [],
  );

  return (
    <KeyboardContext.Provider value={value}>
      {children}
    </KeyboardContext.Provider>
  );
};

export const useKeyboardContext = () => useContext(KeyboardContext);
