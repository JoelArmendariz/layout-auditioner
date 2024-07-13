import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon, DeleteIcon } from "@chakra-ui/icons";
import { useKeyboardContext } from "@/app/modules/keyboard/context/keyboard-provider";
import { useRef, useState } from "react";

export const LayoutPicker = () => {
  const { setActiveLayout, activeLayout, deleteLayout, layouts } =
    useKeyboardContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cancelRef = useRef(null);
  const [layoutToDelete, setLayoutToDelete] = useState("");

  return (
    <Box>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {activeLayout.name ?? "Layout"}
        </MenuButton>
        <MenuList>
          {layouts.map((layout, i) => (
            <MenuItem key={i} onClick={() => setActiveLayout(layout.name)}>
              {layout.name}
              {layout.name !== "QWERTY" ? (
                <IconButton
                  ml="auto"
                  colorScheme="red"
                  variant="ghost"
                  size="sm"
                  aria-label="delete-layout"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLayoutToDelete(layout.name);
                    onOpen();
                  }}
                  icon={<DeleteIcon />}
                />
              ) : null}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Layout: {layoutToDelete}
            </AlertDialogHeader>
            <AlertDialogBody>
              Are you sure? You can&apos;t undo this action afterwards.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  deleteLayout(layoutToDelete);
                  onClose();
                }}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};
