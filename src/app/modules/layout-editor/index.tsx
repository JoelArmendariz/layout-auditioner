import { Divider, VStack } from "@chakra-ui/react";
import { EditorToolbar } from "./components/editor-toolbar";
import { Keyboard } from "../keyboard";
import { useKeyboardContext } from "../keyboard/context/keyboard-provider";
import { useCallback, useEffect, useState } from "react";
import { Key, Layout } from "../keyboard/types";
import { LayoutEmulatorTextInput } from "./components/layout-emulator-text-input";

export const LayoutEditor = () => {
  const { activeLayout, editLayout } = useKeyboardContext();
  const [editedLayout, setEditedLayout] = useState<Layout>(activeLayout);
  const [keyToEdit, setKeyToEdit] = useState<{
    coordinates: string;
    value: Key;
  }>();

  const handleKeyboardKeyClick = (keyToEditConfig: {
    coordinates: string;
    value: Key;
  }) => {
    if (activeLayout.name === "QWERTY") return;
    setKeyToEdit(keyToEditConfig);
  };

  useEffect(() => {
    setEditedLayout(activeLayout);
  }, [activeLayout]);

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setKeyToEdit(undefined);
        return;
      }
      if (keyToEdit) {
        const rowIndex = Number(keyToEdit.coordinates[0]);
        const keyIndex = Number(keyToEdit.coordinates[1]);
        setEditedLayout((prevLayout) => {
          const newKeymap = prevLayout.keyMap.map((prevKeymapRow) => [
            ...prevKeymapRow,
          ]);
          newKeymap[rowIndex][keyIndex] = {
            ...newKeymap[rowIndex][keyIndex],
            value: event.key as Key,
          };
          return {
            ...prevLayout,
            keyMap: newKeymap,
          };
        });
      }
    };
    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  }, [keyToEdit]);

  const handleSaveLayout = useCallback(() => {
    editLayout(editedLayout);
    setKeyToEdit(undefined);
  }, [editLayout, editedLayout]);

  const handleCancelEdit = useCallback(() => {
    setEditedLayout(activeLayout);
    setKeyToEdit(undefined);
  }, [activeLayout]);

  return (
    <VStack gap="4rem">
      <LayoutEmulatorTextInput />
      <VStack w="fit-content" gap="1rem">
        <EditorToolbar
          isEditing={!!keyToEdit}
          onSave={handleSaveLayout}
          onCancel={handleCancelEdit}
        />
        <Divider />
        <Keyboard
          layout={editedLayout}
          onKeyboardKeyClick={handleKeyboardKeyClick}
          focusedKey={keyToEdit}
        />
      </VStack>
    </VStack>
  );
};
