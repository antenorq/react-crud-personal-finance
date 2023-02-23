import { useState } from "react";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

import useNotification from "../hooks/useNotification";
import {
  TextField,
  Box,
  Grid,
  Button,
  MenuItem,
  FormControl,
  Typography,
} from "@mui/material";

const Category = () => {
  const [id, setId] = useState(null);
  const [category_type, setCategoryType] = useState("");
  const [description, setDescription] = useState(null);

  //HOOK Notification
  const { setNotification, showLoading } = useNotification();

  const navigate = useNavigate();

  const url = "http://localhost:3000/categories";

  //POST/EDIT CATEGORY
  const handleSubmit = async (e) => {
    //START LOADING
    showLoading(true);
    e.preventDefault();

    //EDIT - METHOD PUT
    if (id) {
      try {
        const data = { id, category_type, description };
        const res = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (res.ok) {
          setNotification(
            "CATEGORY UPDATED SUCCESSFULY: " + res.statusText,
            "success"
          );
          navigate("/category-list");
        } else {
          setNotification("SOMETHING WENT WRONG: " + res.statusText, "error");
        }
        //END LOADING
        showLoading(false);
      } catch (error) {
        setNotification("SOMETHING WENT WRONG: " + error, "error");
      }
    }
    //CREATE - METHOD POST
    else {
      try {
        const data = { category_type, description };
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (res.ok) {
          setNotification(
            "CATEGORY CREATED SUCCESSFULY: " + res.statusText,
            "success"
          );
          navigate("/category-list");
        } else {
          setNotification("SOMETHING WENT WRONG: " + res.statusText, "error");
        }
        //END LOADING
        showLoading(false);
      } catch (error) {
        setNotification("SOMETHING WENT WRONG: " + error, "error");
      }
    }

    //clear states and inputs after submit or edit
    setCategoryType(null);
    setDescription(null);
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        borderRadius: "8px",
        bgcolor: "#f7f7f7",
        p: 2,
      }}
    >
      <Typography
        align="center"
        color="success.light"
        variant="h4"
        component="h2"
        gutterBottom
      >
        category
      </Typography>

      {/* FORM */}
      <Box component="form" onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <Grid
            container
            rowSpacing={{ xs: 2, sm: 2, md: 4 }}
            columnSpacing={{ xs: 2, sm: 2, md: 4 }}
            sx={{ alignContent: "center" }}
          >
            <Grid item xs={12} md={6} lg={4}>
              <TextField
                select
                value={category_type}
                label="Category"
                required
                margin="normal"
                onChange={(e) => setCategoryType(e.target.value)}
                sx={{ backgroundColor: "#fff", width: "100%" }}
              >
                <MenuItem key={1} value={1}>
                  Income
                </MenuItem>
                <MenuItem key={2} value={2}>
                  Expense
                </MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
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

            <Grid item xs={12} md={12} lg={4}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ marginTop: "18px", width: "100%", p: "12px" }}
              >
                SUBMIT
              </Button>
            </Grid>
          </Grid>
        </FormControl>
      </Box>
    </Container>
  );
};

export default Category;
