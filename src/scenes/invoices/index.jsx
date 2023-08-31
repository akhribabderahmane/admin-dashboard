import { Box, useTheme,Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";
import { tokens } from "../../context/ThemeContext";
import { green } from "@mui/material/colors";
const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID"},
    {
      field: "name",
      headerName: "NAME",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
        field: 'cost',
        headerName: "Cost",
        flex: 1,
        renderCell:(params)=>{
           return(
            <Typography color={colors.greenAccent[500]} fontWeight={'bold'}>{params.row.cost+"$"}</Typography>
           )
        }
      },
      {
        field: "date",
        headerName: "Date",
        flex: 1,
      }
  ];
  return (
    <section className="p-2 mx-4 my-2">
      <Header title={"INVOICES"} subtitle={"List of Invoices Balances"}></Header>
      <Box
        height={"75vh"}
        marginTop={"40px"}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none"
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none"
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            border: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
         "& .MuiCheckbox-root":{
            color:colors.greenAccent[200]
         }  

        }}
      >
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns}></DataGrid>
      </Box>
    </section>
  );
};

export default Invoices;
