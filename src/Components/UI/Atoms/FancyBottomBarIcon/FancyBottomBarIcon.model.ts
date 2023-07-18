import React from "react";

export interface IFancyBottomBarIcon {
  id?: string;
  icon: React.ReactNode;
  label: string;
  color?: string;
  active?: boolean;
  disabled?: boolean;
  handler?: () => void;
}