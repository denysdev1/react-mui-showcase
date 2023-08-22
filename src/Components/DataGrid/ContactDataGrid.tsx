import { DataGrid, GridRenderCellParams, GridToolbar } from "@mui/x-data-grid";
import { Theme, useTheme } from "@mui/material/styles";
import { contactData } from "../../Data/ContactData";
import { Box } from "@mui/material";

const dataGridSx = {
  "& .MuiDataGrid-columnHeader": {
    fontWeight: "bold",
  },
  "& .MuiDataGrid-virtualScrollerRenderZone": {
    "& .MuiDataGrid-row": {
      "&:nth-of-type(2n)": {
        backgroundColor: "grid.main",
      },
    },
  },
};

const getColumns = (theme: Theme) => {
  return [
    {
      field: "name",
      headerName: "Name",
      minWidth: 150,
      renderCell: (cellValues: GridRenderCellParams<string>) => {
        return (
          <Box sx={{ color: "primary.main", fontSize: 18, fontWeight: "bold" }}>
            {cellValues.value}
          </Box>
        );
      },
    },
    {
      field: "role",
      headerName: "Role",
      minWidth: 100,
      renderCell: (cellValues: GridRenderCellParams<string>) => {
        return <div>{cellValues.value}</div>;
      },
    },
    {
      field: "skills",
      headerName: "Skills",
      minWidth: 150,
      renderCell: (cellValues: GridRenderCellParams<string[]>) => {
        return (
          <div style={{ color: theme.palette.primary.main }}>
            {cellValues.value ? cellValues.value[0] : ""}
          </div>
        );
      },
    },
    {
      field: "startDate",
      headerName: "Start Date",
      minWidth: 120,
      renderCell: (cellValues: GridRenderCellParams<string>) => {
        return <div>{cellValues.value}</div>;
      },
    },
    {
      field: "preference",
      headerName: "Work Preference",
      minWidth: 150,
      renderCell: (cellValues: GridRenderCellParams<string>) => {
        return <div>{cellValues.value}</div>;
      },
    },
  ];
};

export default function ContactDataGrid() {
  const theme = useTheme();
  const rows = () => [...contactData];

  return (
    <div style={{ height: 500 }}>
      <DataGrid
        rows={rows()}
        columns={getColumns(theme)}
        pageSize={5}
        headerHeight={60}
        rowHeight={120}
        sx={dataGridSx}
        components={{
          Toolbar: () => (
            <GridToolbar
              sx={{
                justifyContent: "flex-end",
                "& button": { border: "none" },
                "& .MuiBox-root": {
                  display: "none",
                },
              }}
            />
          ),
        }}
        initialState={{
          sorting: { sortModel: [{ field: "name", sort: "asc" }] },
        }}
      />
    </div>
  );
}
