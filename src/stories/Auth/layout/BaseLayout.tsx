import { Box } from "@mui/material";
import { ReactNode } from "react";
import theme from "../../../styles/material-theme";
// import theme from "@/styles/material-theme";
import { createTheme, ThemeProvider } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          backgroundImage: `linear-gradient(45deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
          height: "100vh",
          width: "100vw",
          display: "flex",
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default BaseLayout;
