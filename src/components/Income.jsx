import React from "react";
import { useState, useEffect } from "react";
import { NumericFormat } from "react-number-format";
import Message from "./Message";
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
  InputAdornment,
} from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

const url_categories = "http://localhost:3000/categories";
const url_income = "http://localhost:3000/incomes";

const Income = () => {
  const [list_categories, setList_Categories] = useState([]);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [date, setDate] = useState(null);

  const { setMessage, setTypeMessage } = Message();

  //LOADING CATEGORIES SELECT
  useEffect(() => {
    const fetchData = async (e) => {
      try {
        const res = await fetch(url_categories);
        const data_categories = await res.json();
        setList_Categories(data_categories);
      } catch (error) {
        setMessage("SOMETHING WENT WRONG TO LOAD THE CATEGORIES:" + error);
        setTypeMessage("error");
      }
    };

    fetchData();
  }, []);

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
        setMessage("SOMETHING WENT WRONG");
        setTypeMessage("error");
      }
    } catch (error) {
      setMessage("SOMETHING WENT WRONG: " + error);
      setTypeMessage("error");
    }

    //clean the input after submit
    setCategory("");
    setDescription("");
    setValue("");
    setDate(null);
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
          <NumericFormat
            customInput={TextField}
            name="value"
            label="Value"
            inputMode="numeric"
            required
            margin="normal"
            value={value}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            onChange={(e) => setValue(e.target.value)}
            sx={{ backgroundColor: "#fff" }}
            thousandSeparator={true}
            decimalScale={2}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker
              value={date}
              onChange={(newDate) => {
                setDate(newDate);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  margin="normal"
                  name="date"
                  label="Date"
                  required
                  sx={{ backgroundColor: "#fff" }}
                />
              )}
            />
          </LocalizationProvider>

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
