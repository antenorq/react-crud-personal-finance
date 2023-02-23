import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import useLoadCategories from "../hooks/useLoadCategories";
import useNotification from "../hooks/useNotification";
import { Button, Typography } from "@mui/material";

const CategoryList = () => {
  const [tableData, setTableData] = useState([]);

  const url = "http://localhost:3000/categories";

  //HOOK LOADING CATEGORIES SELECT
  const categories = useLoadCategories(null);

  //HOOK Notification
  const { setNotification, showLoading } = useNotification();

  const onEditClick = (e, row) => {};

  const onDeleteClick = async (e, row) => {
    //START LOADING
    showLoading(true);
    try {
      const res = await fetch(url + "/" + row.id, {
        method: "DELETE",
      });

      if (res.ok) {
        setNotification(" DELETED SUCCESSFULY:" + res.statusText, "success");
      } else {
        setNotification("SOMETHING WENT WRONG: " + res.statusText, "error");
      }
      //END LOADING
      showLoading(false);
    } catch (error) {
      setNotification("SOMETHING WENT WRONG: " + error, "error");
    }
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "category_type",
      headerName: "Category Type",
      flex: 1,
      renderCell: (params) => {
        if (params.row.category_type === 1) return "Income";
        if (params.row.category_type === 2) return "Expense";
      },
    },
    { field: "description", headerName: "Description", flex: 1 },
    {
      field: "Actions",
      headerName: "Actions",
      sortable: false,
      flex: 1,
      align: "right",
      renderCell: (params) => {
        return (
          <>
            <Button
              onClick={(e) => onEditClick(e, params.row)}
              variant="contained"
              color="primary"
              size="small"
              sx={{ mr: 1 }}
            >
              Edit
            </Button>

            <Button
              onClick={(e) => onDeleteClick(e, params.row)}
              variant="contained"
              color="error"
              size="small"
            >
              Delete
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <Container
      maxWidth="md"
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
        Category List
      </Typography>
      <div style={{ height: 500, marginTop: "30px" }}>
        <DataGrid
          rows={categories}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          //components={{ Toolbar: GridToolbar, LoadingOverlay: LinearProgress }}
          //loading={loading ? true : false}
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
  );
};

export default CategoryList;
