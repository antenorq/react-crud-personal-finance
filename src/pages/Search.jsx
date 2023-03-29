import { useState } from "react";
import { Link } from "react-router-dom";
import useNotification from "../hooks/useNotification";
import useLoadCategories from "../hooks/useLoadCategories";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {
  Container,
  TextField,
  Box,
  Grid,
  Button,
  FormControl,
  Typography,
  MenuItem,
} from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import dayjs from "dayjs";

const Search = ({ user_id }) => {
  const [type, setType] = useState(null);
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [description, setDescription] = useState("");

  const [tableData, setTableData] = useState([]);

  //HOOK Notification
  const { showLoading } = useNotification();

  //HOOK LOADING CATEGORIES
  const categories = useLoadCategories("income");

  //Search
  const handleSubmit = async (e) => {
    //START LOADING
    showLoading(true);
    e.preventDefault();

    //I KNOW I NEED REFACTORE IT TO PUT IN A GLOBAL CONTEXT
    const devEnv = process.env.NODE_ENV !== "production";
    const { REACT_APP_DEV_URL, REACT_APP_PROD_URL } = process.env;

    const url =
      (devEnv ? REACT_APP_DEV_URL : REACT_APP_PROD_URL) +
      (type === 1 ? "/incomes" : "/expenses") +
      "?date_gte=" +
      from +
      "&date_lte=" +
      to +
      "&description_like=" +
      description +
      "&user_id=" +
      user_id;

    fetch(url)
      .then((data) => data.json())
      .then((data) => setTableData(data));

    //END LOADING
    showLoading(false);
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      renderCell: (params) => {
        var result = categories.find(
          (categorie) => categorie.id === params.row.category
        );
        if (result) return result.description;
      },
    },
    { field: "description", headerName: "Description", flex: 1 },
    { field: "value", headerName: "Value", flex: 0.5 },
    { field: "date", headerName: "Date", flex: 1 },
  ];

  return (
    <>
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
          color="primary"
          variant="h4"
          component="h2"
          gutterBottom
        >
          Search
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
              <Grid item xs={12} md={6} lg={3}>
                <TextField
                  select
                  name="type"
                  value={type}
                  label="Income or Expense"
                  required
                  margin="normal"
                  onChange={(e) => setType(e.target.value)}
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

              <Grid item xs={12} md={6} lg={2}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MobileDatePicker
                    value={from}
                    onChange={(newDate) => {
                      setFrom(dayjs(newDate).format("YYYY-MM-DD"));
                    }}
                    inputFormat="YYYY-MM-DD"
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        margin="normal"
                        name="from"
                        label="From"
                        required
                        sx={{ backgroundColor: "#fff", width: "100%" }}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Grid>

              <Grid item xs={12} md={6} lg={2}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MobileDatePicker
                    value={to}
                    onChange={(newDate) => {
                      setTo(dayjs(newDate).format("YYYY-MM-DD"));
                    }}
                    inputFormat="YYYY-MM-DD"
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        margin="normal"
                        name="to"
                        label="To"
                        required
                        sx={{ backgroundColor: "#fff", width: "100%" }}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Grid>

              <Grid item xs={12} md={6} lg={3}>
                <TextField
                  name="description"
                  label="Description Contains"
                  type="text"
                  margin="normal"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  sx={{ backgroundColor: "#fff", width: "100%" }}
                />
              </Grid>

              <Grid item xs={12} md={12} lg={2}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ marginTop: "18px", width: "100%", p: "12px" }}
                >
                  Search
                </Button>
              </Grid>
            </Grid>
          </FormControl>
        </Box>

        <div style={{ height: 500, marginTop: "30px" }}>
          <DataGrid
            rows={tableData}
            columns={columns}
            components={{
              Toolbar: GridToolbar,
            }}
            componentsProps={{
              toolbar: {
                showQuickFilter: true,
                quickFilterProps: { debounceMs: 500 },
                sx: {
                  bgcolor: "#eee",
                },
              },
            }}
            initialState={{
              sorting: {
                sortModel: [{ field: "id", sort: "desc" }],
              },
            }}
            sx={{ backgroundColor: "#fff", overflowY: "scroll" }}
          />
        </div>
      </Container>
      <Link to="/">
        <Button
          type="button"
          variant="contained"
          size="medium"
          sx={{ marginTop: "18px" }}
        >
          Back
        </Button>
      </Link>
    </>
  );
};

export default Search;
