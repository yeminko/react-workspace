import type { ReactNode } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: ReactNode;
}

export default function Protal({ children }: Props) {
  const portalId = document.getElementById("my-portal");

  return createPortal(children, portalId!);
}
