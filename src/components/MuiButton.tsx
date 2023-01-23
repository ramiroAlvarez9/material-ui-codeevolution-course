import {useState} from 'react';
import {
  Button,
  Stack,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import SendTwoToneIcon from "@mui/icons-material/SendTwoTone";

const MuiButton = () => {
  
  const [formats, setFormats] = useState<string | null >(null);

  console.log({
    formats,
  })

  const handleFormatChange = (_event : React.MouseEvent<HTMLElement>, updatedFormats : string | null )  =>  setFormats(updatedFormats);



  return (
    <>
      <Stack spacing={5}>
        <Button variant="text">Text</Button>
        <Button variant="contained"> Contained </Button>
        <Button variant="outlined"> Outlined </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
      </Stack>

      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          {" "}
          Small{" "}
        </Button>
        <Button variant="contained" size="medium">
          {" "}
          Medium{" "}
        </Button>
        <Button variant="contained" size="large">
          {" "}
          Large{" "}
        </Button>
      </Stack>
      {/*Buttons with icons - MUI ICONS*/}

      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          startIcon={<SendTwoToneIcon />}
          disableElevation
          disableRipple
        >
          {" "}
          1Send
        </Button>
        <Button variant="contained" endIcon={<SendTwoToneIcon />}>
          {" "}
          2Send
        </Button>
        <IconButton aria-label="send" color="success" size="large">
          <SendTwoToneIcon />
        </IconButton>
        {/*Button Group*/}
        <Stack direction="row">
          <ButtonGroup variant="contained" size="small" color="secondary">
            <Button> Left </Button>
            <Button> Center </Button>
            <Button> Right </Button>
          </ButtonGroup>
        </Stack>
      </Stack>
      {/*Toggle Button - Toggle Button Group*/}
      <Stack direction="row" spacing={2}>

        <ToggleButtonGroup aria-label="text formatting" value = {formats} onChange = {handleFormatChange} size = "small" color = "success" orientation= "vertical" exclusive>
        
          <ToggleButton value="bold" aria-label="bold"  >
            <FormatBoldIcon />
          </ToggleButton>
        
          <ToggleButton value="italic" aria-label="italic" >
            <FormatItalicIcon />
          </ToggleButton>

          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        
        </ToggleButtonGroup>
      
      </Stack>
    </>
  );
};

export default MuiButton;
