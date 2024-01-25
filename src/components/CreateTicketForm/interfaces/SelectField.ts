import { Disabled } from "./Disabled";
import { SelectChangeEvent } from "@mui/material";

export interface SelectItems {
  value: string;
  label: string;
};

export interface SelectField extends Disabled {
  name?: string;
  label?: string;
  value?: string;
  onChange?: (event: SelectChangeEvent) => void;
  items?: SelectItems[];
};
