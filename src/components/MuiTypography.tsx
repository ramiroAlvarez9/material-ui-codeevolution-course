import { Typography, ThemeProvider, createTheme } from "@mui/material";

const MuiTypography = () => {
  const theme = createTheme({
    typography: {
      fontFamily: [
        '"Open Sans"',

      ].join(","),
    },
  });

  return (
    <>
      <div>
      <ThemeProvider theme = {theme} >
        
          <Typography variant="h1">h1 Heading</Typography>
          <Typography variant="subtitle2"> Sub-title </Typography>
          <Typography variant="body1">
            Body 1.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Eveniet ex sed culpa, explicabo dolorum odit nulla doloribus
            perspiciatis accusantium repellat eum, adipisci dignissimos, tempora
            reprehenderit. Esse ad animi laudantium minus.
          </Typography>
        
        </ThemeProvider>
      </div>
    </>
  );
};

export default MuiTypography;
