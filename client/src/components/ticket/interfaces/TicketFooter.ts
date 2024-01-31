import React from 'react';

export interface FooterUI {
  id: string;
  status?: string;
  onStatusChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  onClick?: (
    event:
    | React.MouseEvent<HTMLButtonElement>
    | React.MouseEvent<HTMLAnchorElement>,
  ) => void;
};
