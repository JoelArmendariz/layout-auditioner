import {
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { KeyboardContext } from "./keyboard-context";
import { DVORAK_LAYOUT, QWERTY_LAYOUT } from "../constants/layouts";
import { Layout } from "../types";
import { useToast } from "@chakra-ui/react";

export const KeyboardProvider = ({ children }: PropsWithChildren) => {
  const [activeLayout, setActiveLayoutState] = useState<Layout>(QWERTY_LAYOUT);
  const [layouts, setLayouts] = useState<Layout[]>([]);
  const toast = useToast();

  useEffect(() => {
    const storedLayoutsStr = localStorage.getItem("layouts");
    const storedLayouts: Layout[] = JSON.parse(storedLayoutsStr ?? "[]");
    if (!storedLayouts.length) {
      const defaultLayouts = [QWERTY_LAYOUT, DVORAK_LAYOUT];
      setLayouts(defaultLayouts);
      return;
    }
    const storedActiveLayout = localStorage.getItem("activeLayout");
    if (storedActiveLayout) {
      setActiveLayoutState(
        storedLayouts.find(
          (storedLayout) => storedLayout.name === storedActiveLayout,
        ) ?? QWERTY_LAYOUT,
      );
    }
    setLayouts(storedLayouts);
  }, []);

  useEffect(() => {
    if (!layouts.length) return;
    localStorage.setItem("layouts", JSON.stringify(layouts));
  }, [layouts]);

  const setActiveLayout = useCallback(
    (layoutName: string) => {
      const existingLayout = layouts.find(
        (layout) => layout.name.toLowerCase() === layoutName.toLowerCase(),
      );
      if (existingLayout) {
        setActiveLayoutState(existingLayout);
        localStorage.setItem("activeLayout", existingLayout.name);
      } else {
        toast({
          title: "Layout not found",
          description:
            "Unable to find layout. Please make sure that it exists.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    },
    [layouts, toast],
  );

  const editLayout = useCallback(
    (updatedLayout: Layout) => {
      setLayouts((prevLayouts) =>
        prevLayouts.map((prevLayout) =>
          prevLayout.name === updatedLayout.name ? updatedLayout : prevLayout,
        ),
      );
      setActiveLayoutState(updatedLayout);
      toast({
        title: `Layout "${updatedLayout.name}" updated`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    },
    [toast],
  );

  const saveNewLayout = useCallback(
    (newLayoutName: string) => {
      const newLayout = {
        ...QWERTY_LAYOUT,
        name: newLayoutName,
      };
      setLayouts((prevLayouts) => [...prevLayouts, newLayout]);
      setActiveLayoutState(newLayout);
      toast({
        title: `Layout "${newLayoutName}" created`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    },
    [toast],
  );

  const deleteLayout = useCallback(
    (layoutToDelete: string) => {
      setLayouts((prevLayouts) =>
        prevLayouts.filter(({ name }) => name !== layoutToDelete),
      );
      setActiveLayoutState(QWERTY_LAYOUT);
      toast({
        title: "Layout deleted",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    },
    [toast],
  );

  const value = useMemo(
    () => ({
      activeLayout,
      setActiveLayout,
      saveNewLayout,
      editLayout,
      deleteLayout,
      layouts,
    }),
    [
      activeLayout,
      setActiveLayout,
      saveNewLayout,
      editLayout,
      deleteLayout,
      layouts,
    ],
  );

  return (
    <KeyboardContext.Provider value={value}>
      {children}
    </KeyboardContext.Provider>
  );
};

export const useKeyboardContext = () => useContext(KeyboardContext);
