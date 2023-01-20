import React, { useState } from "react";
import { Container, Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { async } from "@firebase/util";
import { db } from "../firebase/config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import "@fontsource/roboto/300.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();

  const user = { email, password };

  const handleLogin = async (e) => {
    e.preventDefault();

    const result = await signInWithEmailAndPassword(auth, email, password);

    console.log(result);
  };

  return (
    <Container maxWidth="md">
      <Box bgcolor="#DDD" mt={"20px"}>
        <Typography component="h1" variant="h6">
          LOGIN DE USUARIooo
        </Typography>
        <form>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <Button onClick={handleLogin} mt={10}>
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
