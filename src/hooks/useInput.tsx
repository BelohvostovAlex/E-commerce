import { SelectChangeEvent } from "@mui/material";
import React, { useState } from "react";

export type EventType =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLSelectElement>
  | SelectChangeEvent<string>;
type UseInputType = [string, (event: EventType) => void];

export const useInput = (initialValue: string = ""): UseInputType => {
  const [value, setValue] = useState("");

  const handleChange = (event: EventType) => {
    setValue(event.target.value);
  };

  return [value, handleChange];
};
