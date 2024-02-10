import { ReactNode } from "react";

import { IVariantUIComponent } from "../../../types/components.types";

export interface IButtonProps extends IVariantUIComponent {
  children: ReactNode;
  onClick?: () => void;
}
