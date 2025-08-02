import type { IconType } from "react-icons/lib";
export interface CardProps {
  icon: IconType;
  name: string;
  textContent: string[] | string;
}
