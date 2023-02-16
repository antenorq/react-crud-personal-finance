import { useState, useEffect } from "react";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";
import { Button } from "@mui/material";

const ShowDataGrid = ({ url }) => {
  const [tableData, setTableData] = useState([]);
  const [clickedRow, setClickedRow] = useState();

  const onEditClick = (e, row) => {
    setClickedRow(row);

    console.log(clickedRow);
  };

  const onDeleteClick = (e, row) => {
    setClickedRow(row);
  };

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
    fetch(url)
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);

  return (
    <div style={{ height: 500, marginTop: "30px" }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        components={{ Toolbar: GridToolbar }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        sx={{ backgroundColor: "#fff" }}
      />
      clickedRow: {clickedRow ? clickedRow.id : null}
    </div>
  );
};

export default ShowDataGrid;
