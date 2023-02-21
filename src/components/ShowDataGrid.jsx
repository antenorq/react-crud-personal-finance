import { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import useNotification from "../hooks/useNotification";

const ShowDataGrid = ({ url, formState }) => {
  const [tableData, setTableData] = useState([]);

  //HOOK Notification
  const { loading, showLoading } = useNotification();

  const onEditClick = (e, row) => {
    formState.setId(row.id);
    formState.setCategory(row.category);
    formState.setDescription(row.description);
    formState.setValue(row.value);
    formState.setDate(row.date);
    formState.setSubmitText("EDIT");
  };

  const onDeleteClick = (e, row) => {};

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "category", headerName: "Category", flex: 1 },
    { field: "description", headerName: "Description", flex: 1 },
    { field: "value", headerName: "Value", flex: 0.5 },
    { field: "date", headerName: "Date", flex: 1 },
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

  useEffect(() => {
    showLoading(true);

    fetch(url)
      .then((data) => data.json())
      .then((data) => setTableData(data));

    showLoading(false);
  }, [formState.id]);

  return (
    <div style={{ height: 500, marginTop: "30px" }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        components={{ Toolbar: GridToolbar, LoadingOverlay: LinearProgress }}
        loading={loading ? true : false}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
            color: "red",
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
  );
};

export default ShowDataGrid;
