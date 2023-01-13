import React from "react";
import { Container, Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Container maxWidth="xl">
      <Box bgcolor="#eee">{children}</Box>
    </Container>
  );
};

export default Layout;
