import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import React, { useState } from "react";
import { CheckBox } from "@mui/icons-material";

export const MuiCheckBox = () => {
  const [acceptTnC, setAcceptTnC] = useState<boolean>(false);
  const [skills, setSkills] = useState<string[]>([]);
  console.log(acceptTnC);

  const handleChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
    setAcceptTnC(e.target.checked);
  };

  console.log({skills})

  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement> ) => {

    const index = skills.indexOf(e.target.value);
    if(index === -1){
        setSkills([...skills, e.target.value]);
    }else{
        setSkills(skills.filter(skill => skill !== e.target.value));
    }

  }

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="i accept terms and conditions"
          control={<Checkbox checked={acceptTnC} onChange={handleChange} />}
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            ````{" "}
            <FormControlLabel
              label="HTML"
              value="html"
              control={<Checkbox checked={skills.includes("html")} onChange={ handleSkillChange} />}
              
            />
            <FormControlLabel
              label="css"
              value="css"
              control={<Checkbox checked={skills.includes("css")} onChange={handleSkillChange}/>}
              
            />
            <FormControlLabel
              label="javascript"
              value="javascript"
              control={<Checkbox checked={skills.includes("javascript")} onChange={handleSkillChange} />}
            />
            
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};
