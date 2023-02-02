import React from "react";
import { useState, useEffect } from "react";
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

const url_categories = "http://localhost:3000/categories";
const url_income = "http://localhost:3000/incomes";

const Income = () => {
  const [list_categories, setList_Categories] = useState([]);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");

  //LOADING CATEGORIES SELECT
  useEffect(() => {
    const fetchData = async (e) => {
      try {
        const res = await fetch(url_categories);
        const data_categories = await res.json();
        setList_Categories(data_categories);
      } catch (error) {
        console.log("error do useEffect lista categorias: " + error.message);
      }
    };

    fetchData();
  }, []);

  //SUBMIT POST INCOME
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = { category, description, value, date };
      const res = await fetch(url_income, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log("resposta do fetch dentro do try: " + res.json());
    } catch (error) {
      console.log("error do catch do submit: " + error.message);
    }

    //

    //clena the input after submit
    setCategory("");
    setDescription("");
    setValue("");
    setDate("");
  };

  return (
    <Container
      maxWidth="sm"
      sx={{ borderRadius: "8px", backgroundColor: "#fff", p: 4 }}
    >
      <Typography
        align="center"
        color="success.light"
        variant="h3"
        component="h2"
        gutterBottom
      >
        Income
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
          >
            {list_categories.map((categ) => (
              <MenuItem key={categ.id} value={categ.id}>
                {categ.description}
              </MenuItem>
            ))}
          </Select>

          <TextField
            name="description"
            label="Description"
            type="text"
            required
            margin="normal"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            name="value"
            label="Value"
            type="text"
            required
            margin="normal"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <TextField
            name="date"
            label="Date"
            type="text"
            required
            margin="normal"
            value={date}
            onChange={(e) => setDate(e.target.value)}
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

export default Income;
