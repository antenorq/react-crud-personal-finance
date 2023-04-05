import { useContext, useState, useEffect } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import CancelIcon from "@mui/icons-material/Cancel";
import PostAddIcon from "@mui/icons-material/PostAdd";
import KeyIcon from "@mui/icons-material/Key";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import useLoadCategories from "../hooks/useLoadCategories";

import style from "./dashboard.module.css";

const Dashboard = () => {
  const [tableData, setTableData] = useState([]);

  //CONTEXT AUTH
  const { user, setUser } = useContext(AuthContext);

  //HOOK LOADING CATEGORIES
  const categories = useLoadCategories("all");

  //I KNOW I NEED REFACTORE IT TO PUT IN A GLOBAL CONTEXT
  const devEnv = process.env.NODE_ENV !== "production";
  const { REACT_APP_DEV_URL, REACT_APP_PROD_URL } = process.env;

  const url_incomes =
    (devEnv ? REACT_APP_DEV_URL : REACT_APP_PROD_URL) +
    "/incomes?" +
    "&user_id=" +
    user.id;

  const url_expenses =
    (devEnv ? REACT_APP_DEV_URL : REACT_APP_PROD_URL) +
    "/expenses?" +
    "&user_id=" +
    user.id;

  useEffect(() => {
    const fetchData = async (e) => {
      var income_expense = [];

      const res = await fetch(url_incomes);
      const datai = await res.json();

      const res2 = await fetch(url_expenses);
      const datae = await res2.json();

      income_expense = [...datai, ...datae];
      setTableData(income_expense);
      return tableData;
    };
    fetchData();
  }, []);

  const logout = () => {
    setUser(null);
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

  const iconsize = {
    fontSize: { xs: "80px", md: "100px", lg: "120px" },
  };
  const paperstyle = { p: { xs: 2, sm: 2, md: 4 }, borderRadius: 3 };

  return (
    <Grid
      container
      rowSpacing={{ xs: 2, sm: 2, md: 4 }}
      columnSpacing={{ xs: 2, sm: 2, md: 4 }}
    >
      <Grid item xs={6} sm={4} md={4} lg={2}>
        <Link to="/income">
          <Paper className={style.paper} elevation={2} sx={paperstyle}>
            <AddCircleIcon color="success" sx={iconsize} />
            <Typography variant="h6">INCOME</Typography>
          </Paper>
        </Link>
      </Grid>

      <Grid item xs={6} sm={4} md={4} lg={2}>
        <Link to="/expense">
          <Paper className={style.paper} elevation={2} sx={paperstyle}>
            <RemoveCircleIcon color="error" sx={iconsize} />
            <Typography variant="h6">EXPENSE</Typography>
          </Paper>
        </Link>
      </Grid>

      <Grid item xs={6} sm={4} md={4} lg={2}>
        <Link to="/search">
          <Paper className={style.paper} elevation={2} sx={paperstyle}>
            <ManageSearchIcon color="primary" sx={iconsize} />
            <Typography variant="h6">SEARCH</Typography>
          </Paper>
        </Link>
      </Grid>

      <Grid item xs={6} sm={4} md={4} lg={2}>
        <Link to="/category">
          <Paper className={style.paper} elevation={2} sx={paperstyle}>
            <PostAddIcon color="primary" sx={iconsize} />
            <Typography variant="h6">CATEGORY</Typography>
          </Paper>
        </Link>
      </Grid>

      <Grid item xs={6} sm={4} md={4} lg={2}>
        <Link to={"/register/update/" + user.id}>
          <Paper className={style.paper} elevation={2} sx={paperstyle}>
            <KeyIcon color="primary" sx={iconsize} />
            <Typography variant="h6">PASSWORD</Typography>
          </Paper>
        </Link>
      </Grid>

      <Grid item xs={6} sm={4} md={4} lg={2}>
        <Paper
          onClick={logout}
          className={style.paper}
          elevation={2}
          sx={paperstyle}
        >
          <CancelIcon color="primary" sx={iconsize} />
          <Typography variant="h6">LOGOUT</Typography>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper className={style.paper} elevation={2} sx={paperstyle}>
          <Typography
            align="center"
            color="primary"
            variant="h4"
            component="h2"
            gutterBottom
          >
            Last Records
          </Typography>

          <div style={{ height: 300, marginTop: "30px" }}>
            <DataGrid
              rows={tableData}
              columns={columns}
              getRowId={(row) => row.id + row.value}
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
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
