import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";
export const MuiTextField = () => {
  const [value, setValue] = useState("");

  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="Small Secondary" size="small" color="secondary" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="Form Input" size="small" color="secondary" />
        <TextField
          label="Form Input"
          size="small"
          color="secondary"
          helperText="escriba su mail"
        />

        <TextField
          label="Password"
          type="password"
          color="secondary"
          helperText="no comparta su password"
        />

        <TextField label="Read only" InputProps={{ readOnly: true }} />

        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />

        <TextField 
            label="Form Input" 
            required value={value} 
            type = 'password'
            onChange={e => setValue(e.target.value)}
            error = {!value}
            helperText = {!value ? 'Required' : 'Do not share your password with anyone'}
        />


      </Stack>
    </Stack>
    
    );
};
