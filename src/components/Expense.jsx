import React from "react";
import { useState } from "react";
import {
  TextField,
  Box,
  Container,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
} from "@mui/material";

const Expense = () => {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");

  const data = { category, description, value, date };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{ borderRadius: "8px", backgroundColor: "#f7f7f7", p: 2 }}
    >
      <Typography
        align="center"
        color="error.light"
        variant="h4"
        component="h2"
        gutterBottom
      >
        expense
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <FormControl fullWidth>
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            value={category}
            label="Category"
            onChange={(e) => setCategory(e.target.value)}
            sx={{ backgroundColor: "#fff" }}
          >
            <MenuItem value={1}>Rent</MenuItem>
            <MenuItem value={2}>Grocery</MenuItem>
            <MenuItem value={3}>Car Insurance</MenuItem>
          </Select>

          <TextField
            name="description"
            label="Description"
            type="text"
            required
            margin="normal"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            sx={{ backgroundColor: "#fff" }}
          />
          <TextField
            name="value"
            label="Value"
            type="number"
            required
            margin="normal"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            sx={{ backgroundColor: "#fff" }}
          />
          <TextField
            name="date"
            label="Date"
            type="text"
            required
            margin="normal"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            sx={{ backgroundColor: "#fff" }}
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{ marginTop: "20px" }}
          >
            Submit
          </Button>
        </FormControl>
      </Box>
    </Container>
  );
};

export default Expense;
