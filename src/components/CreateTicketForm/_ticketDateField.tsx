import React, { FC, ReactElement, useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { DateField } from './interfaces/DateField';

export const TicketDateField: FC<DateField> = (): ReactElement => {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label="Ticket Date"
        onChange={(newValue) => setDate(newValue)}
        value={date} />
    </LocalizationProvider>
  );
};