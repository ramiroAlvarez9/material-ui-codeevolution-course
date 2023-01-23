import React from "react";
import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

export const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);
  console.log({ countries });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setCountries(typeof value === 'string' ? value.split (',') : value );
  };

  /* select is the type of the TextField*/
  return (
    <Box width="250">
      <TextField
        label="Select country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        size='small'
        color='secondary'
        helperText = "Please select your country"
        error
      >
        <MenuItem value="IN">IN</MenuItem>
        <MenuItem value="ARG">ARG</MenuItem>
        <MenuItem value="CH">CHI</MenuItem>
        <MenuItem value="US">US</MenuItem>
      </TextField>
    </Box>
  );
};
