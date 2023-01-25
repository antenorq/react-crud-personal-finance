import React from "react";
import { useState, useEffect } from "react";
import { TextField, Box, Container } from "@mui/material";
import {} from "@mui/system";

const Income = () => {
  const { category, setcategory } = useState("");
  const { description, setdescription } = useState("");
  const { value, setValue } = useState("");
  const { date, setDate } = useState("");

  return (
    <Container maxWidth="sm" sx={{ backgroundColor: "#fff", p: 4 }}>
      <Box component="form">
        <TextField label="Description" variant="outlined" required />
        <TextField label="Value" variant="outlined" />
        <TextField label="Date" variant="outlined" />
      </Box>
    </Container>
  );
};

export default Income;
