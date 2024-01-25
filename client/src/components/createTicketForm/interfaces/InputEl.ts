import React from 'react';
import { Disabled } from "./Disabled";

export interface InputEl extends Disabled {
  onChange?: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => void;
};
