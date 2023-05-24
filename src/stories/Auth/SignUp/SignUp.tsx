// External deps
import React, { useState } from "react";
import {
  Container,
  Box,
  Paper,
  Button,
  TextField,
  Grid,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// Internal deps
import BaseLayout from "../layout/BaseLayout";
import LinkTo from "../common/LinkTo";
import theme from "../../../styles/material-theme";

interface SignUpProps {
  layout: "center" | "right";
}

const SignUp = ({ layout = "center" }: SignUpProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const centerLayout = {};

  const rightLayout = {
    right: 0,
    top: -30,
    height: "100vh",
    maxWidth: "500px",
    display: "flex",
    alignItems: "center",
    position: "fixed",
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleRepeatPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRepeatPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleRepeatPasswordVisibility = () => {
    setShowRepeatPassword(!showRepeatPassword);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    <BaseLayout>
      <Container
        maxWidth="sm"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box>
          <Paper
            elevation={3}
            sx={{ paddingX: 5, paddingY: 6 }}
            style={layout === "center" ? centerLayout : rightLayout}
          >
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} marginBottom={2}>
                  <Typography
                    variant="h4"
                    align="center"
                    fontWeight="bold"
                    marginBottom={1}
                  >
                    Create new account
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    fontSize={13}
                    color={theme.palette.text.secondary}
                  >
                    Please fill in the form to continue
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Username"
                    fullWidth
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    value={password}
                    onChange={handlePasswordChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={togglePasswordVisibility}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Repeat Password"
                    type={showRepeatPassword ? "text" : "password"}
                    fullWidth
                    value={repeatPassword}
                    onChange={handleRepeatPasswordChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={toggleRepeatPasswordVisibility}>
                            {showRepeatPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ marginTop: 2 }}
                    fullWidth
                  >
                    Sign Up
                  </Button>

                  <Box marginTop={1}>
                    <LinkTo
                      // to='/'
                      text={`Already have an account? Log in`}
                    />
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Box>
      </Container>
    </BaseLayout>
  );
};

export default SignUp;
