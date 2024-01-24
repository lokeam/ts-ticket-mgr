import { Disabled } from "./Disabled";

export interface DateField extends Disabled {
  value?: Date | null;
  onChange?: (date: Date | null) => void;
};
