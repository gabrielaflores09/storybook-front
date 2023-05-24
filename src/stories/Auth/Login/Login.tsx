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
} from "@mui/material";

// Internal deps
import BaseLayout from "../layout/BaseLayout";
import LinkTo from "../common/LinkTo";
import theme from "../../../styles/material-theme";

interface LoginProps {
  layout: "center" | "right";
}

const Login = ({ layout = "center" }: LoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("username: ", username);
    console.log("password: ", password);
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
              <Grid container spacing={3}>
                <Grid item xs={12} marginBottom={2}>
                  <Typography
                    variant="h4"
                    align="center"
                    fontWeight="bold"
                    marginBottom={1}
                  >
                    Log in
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    fontSize={13}
                    color={theme.palette.text.secondary}
                  >
                    Welcome Back, please sign in to your account
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
                    type="password"
                    fullWidth
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </Grid>
                <Box marginTop={1} textAlign="right" width="100%">
                  <LinkTo
                    // to="/"
                    text={`Forgot Password?`}
                  />
                </Box>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                  >
                    Sign In
                  </Button>

                  <Box marginTop={1}>
                    <LinkTo
                      // to="/"
                      text={`Don't have an account? Sign Up`}
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

export default Login;
