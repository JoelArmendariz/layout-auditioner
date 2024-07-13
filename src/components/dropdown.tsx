import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { twJoin } from "tailwind-merge";

export interface DropdownOption<TOption> {
  label: string;
  value?: TOption;
}

interface DropdownProps<TOption> {
  options: DropdownOption<TOption>[];
  label?: string;
  onChange?: (option: DropdownOption<TOption>) => void;
}

export function Dropdown<TOption>({
  options,
  label,
  onChange,
}: DropdownProps<TOption>) {
  const handleSelectOption = (option: DropdownOption<TOption>) => {
    if (onChange) {
      onChange(option);
    }
  };
  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        {label || "Options"}
        <ChevronDownIcon
          className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
          aria-hidden="true"
        />
      </MenuButton>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute z-10 right-0 mt-2 min-w-full w-fit origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {options.map(({ label, value }) => (
            <div className="px-1 py-1" key={`dropdown-option--${label}`}>
              <MenuItem>
                {({ focus }) => (
                  <button
                    onClick={() => handleSelectOption({ label, value })}
                    className={twJoin(
                      focus ? "bg-violet-500 text-white" : "text-gray-900",
                      "group flex w-full items-center rounded-md px-2 py-2 text-sm",
                    )}
                  >
                    {label}
                  </button>
                )}
              </MenuItem>
            </div>
          ))}
        </MenuItems>
      </Transition>
    </Menu>
  );
}
