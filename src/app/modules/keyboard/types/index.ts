export type Key =
  | "`"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "0"
  | "-"
  | "="
  | "delete"
  | "tab"
  | "q"
  | "w"
  | "e"
  | "r"
  | "t"
  | "y"
  | "u"
  | "i"
  | "o"
  | "p"
  | "["
  | "]"
  | "\\"
  | "caps"
  | "a"
  | "s"
  | "d"
  | "f"
  | "g"
  | "h"
  | "j"
  | "k"
  | "l"
  | ";"
  | "'"
  | "enter"
  | "left-shift"
  | "z"
  | "x"
  | "c"
  | "v"
  | "b"
  | "n"
  | "m"
  | ","
  | "."
  | "/"
  | "right-shift"
  | "space";

export type Size =
  | "1u"
  | "1.25u"
  | "1.5u"
  | "1.75u"
  | "2u"
  | "2.25u"
  | "2.5u"
  | "2.75u"
  | "6u";

export interface KeyboardKeyConfig {
  label?: string;
  value: Key;
  size: Size;
}

export type KeyMap = Record<Key, Key>;

export interface Layout {
  name: string;
  keyMap: KeyMap;
}
