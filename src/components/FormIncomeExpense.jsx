import { useState } from "react";
import { NumericFormat } from "react-number-format";
import useNotification from "../hooks/useNotification";
import useLoadCategories from "../hooks/useLoadCategories";
import {
  TextField,
  Box,
  Grid,
  Button,
  MenuItem,
  FormControl,
  Typography,
  InputAdornment,
} from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

const FormIncomeExpense = ({ formType, url }) => {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [date, setDate] = useState(null);

  //HOOK Notification
  const { setNotification } = useNotification();

  //HOOK LOADING CATEGORIES SELECT
  const categories = useLoadCategories();

  //SUBMIT POST INCOME
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { category, description, value, date };
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setNotification(formType + " REGISTERED SUCCESSFULY", "success");
      } else {
        setNotification("SOMETHING WENT WRONG", "error");
      }
    } catch (error) {
      setNotification("SOMETHING WENT WRONG: " + error, "error");
    }

    //clear the input after submit
    setCategory("");
    setDescription("");
    setValue("");
    setDate(null);
  };

  return (
    <>
      <Typography
        align="center"
        color={formType === "income" ? "success.light" : "error"}
        variant="h4"
        component="h2"
        gutterBottom
      >
        {formType}
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <Grid
            container
            rowSpacing={{ xs: 2, sm: 2, md: 4 }}
            columnSpacing={{ xs: 2, sm: 2, md: 4 }}
            sx={{ alignContent: "center" }}
          >
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <TextField
                select
                value={category}
                label="Category"
                onChange={(e) => setCategory(e.target.value)}
                sx={{ backgroundColor: "#fff", width: "100%", mt: "16px" }}
              >
                {categories &&
                  categories.map((categ) => (
                    <MenuItem key={categ.id} value={categ.id}>
                      {categ.description}
                    </MenuItem>
                  ))}
              </TextField>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={3}>
              <TextField
                name="description"
                label="Description"
                type="text"
                required
                margin="normal"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                sx={{ backgroundColor: "#fff", width: "100%" }}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={2}>
              <NumericFormat
                customInput={TextField}
                name="value"
                label="Value"
                inputMode="numeric"
                required
                margin="normal"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                thousandSeparator={false}
                decimalScale={2}
                sx={{ backgroundColor: "#fff", width: "100%" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={2}>
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
                      sx={{ backgroundColor: "#fff", width: "100%" }}
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={2}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ marginTop: "18px", width: "100%", p: "12px" }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </FormControl>
      </Box>
    </>
  );
};

export default FormIncomeExpense;
