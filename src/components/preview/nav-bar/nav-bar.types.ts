import { Dispatch, SetStateAction } from "react";

export type NavBarProps = {
  activePage: 'preview' | 'layout' | 'styles';
  setActivePage: Dispatch<SetStateAction<"preview" | "layout" | "styles">>;
  isDisabled: boolean;
}
