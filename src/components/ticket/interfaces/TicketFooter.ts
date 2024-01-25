import React from 'react';

export interface FooterUI {
  onStatusChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  onClick?: (
    event:
    | React.MouseEvent<HTMLButtonElement>
    | React.MouseEvent<HTMLAnchorElement>,
  ) => void;
};
