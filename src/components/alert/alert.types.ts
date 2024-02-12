import { IVariantUIComponent } from "../../types/components.types";

export interface IAlertProps extends IVariantUIComponent {
  message: string;
  onClose: (value?: string) => void;
}
