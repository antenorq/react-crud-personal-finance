import React from "react";
import { useState, useEffect, useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";
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

  const { setMessage, setTypeMessage } = useContext(NotificationContext);

  //LOADING CATEGORIES SELECT
  useEffect(() => {
    const fetchData = async (e) => {
      try {
        const res = await fetch(url_categories);
        const data_categories = await res.json();
        setList_Categories(data_categories);
      } catch (error) {
        setMessage("SOMETHING WENT WRONG TO LOAD THE CATEGORIES: " + error);
        setTypeMessage("error");
      }
    };

    fetchData();
  });

  //SUBMIT POST INCOME
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { category, description, value, date };
      const res = await fetch(url_income, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setMessage("INCOME REGISTERED SUCCESSFULY");
        setTypeMessage("success");
      } else {
        setMessage("SOMETHING WENT WRONG ");
        setTypeMessage("error");
      }
    } catch (error) {
      setMessage("SOMETHING WENT WRONG: " + error);
      setTypeMessage("error");
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
      sx={{ borderRadius: "8px", backgroundColor: "#f7f7f7", p: 2 }}
    >
      <Typography
        align="center"
        color="success.light"
        variant="h4"
        component="h2"
        gutterBottom
      >
        income
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
            sx={{ backgroundColor: "#fff" }}
          />
          <TextField
            name="value"
            label="Value"
            type="text"
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

export default Income;
