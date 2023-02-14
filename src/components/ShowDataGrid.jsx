import { useState, useEffect } from "react";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID" },
  { field: "category", headerName: "Category", flex: 1 },
  { field: "description", headerName: "Description", flex: 1 },
  { field: "value", headerName: "Value", flex: 0.5 },
  { field: "date", headerName: "Date", flex: 1 },
];

const ShowDataGrid = ({ url }) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);

  return (
    <div style={{ height: 500 }}>
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
    </div>
  );
};

export default ShowDataGrid;
