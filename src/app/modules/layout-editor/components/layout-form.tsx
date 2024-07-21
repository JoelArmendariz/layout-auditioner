import {
  Box,
  Button,
  HStack,
  IconButton,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverTrigger,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { ChangeEvent, KeyboardEvent, useRef, useState } from "react";
import { useKeyboardContext } from "../../keyboard/context/keyboard-provider";

export const LayoutForm = () => {
  const { saveNewLayout } = useKeyboardContext();
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [newLayoutInputValue, setNewLayoutInputValue] = useState("");
  const inputRef = useRef(null);

  const handleCreateNewLayout = () => {
    saveNewLayout(newLayoutInputValue);
    setNewLayoutInputValue("");
    onClose();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNewLayoutInputValue(e.target.value);

  const handleSubmitOnEnter = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCreateNewLayout();
    }
  };

  return (
    <Popover
      initialFocusRef={inputRef}
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      closeOnEsc
    >
      <Tooltip aria-label="new-layout-tooltip" label="New layout">
        <Box display="inline-block">
          <PopoverTrigger>
            <IconButton
              onClick={onOpen}
              colorScheme="blue"
              aria-label="new-layout"
              icon={<AddIcon />}
            />
          </PopoverTrigger>
        </Box>
      </Tooltip>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>
          <Input
            ref={inputRef}
            onChange={handleInputChange}
            onKeyDown={handleSubmitOnEnter}
            autoFocus
            placeholder="Layout name"
          />
        </PopoverBody>
        <PopoverFooter>
          <form>
            <HStack justifyContent="space-between">
              <Button onClick={onClose}>Cancel</Button>
              <Button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  handleCreateNewLayout();
                }}
                colorScheme="blue"
              >
                Create
              </Button>
            </HStack>
          </form>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};
