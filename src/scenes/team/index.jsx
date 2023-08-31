import { Box, Typography, colors, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { tokens } from "../../context/ThemeContext";
const Team = () => {
    const theme=useTheme();
    const colors=tokens(theme.palette.mode)
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "NAME", flex: 1,cellClassName:'name-column--cell'},
    { field: "age", headerName: "AGE",type:'number',headerAlign:'left',align:'left'},
    { field: "phone", headerName: "Phone Number", flex: 1},
    { field: "email", headerName: "Email", flex: 1},
    { field: "access", headerName: "Access Level", flex: 1 ,
    renderCell :({row:{access}})=>{
         return(
            <Box
            width='60%'
            m='0 auto'
            p='5px'
            display='flex'
            justifyContent='center'
             backgroundColor={access ==='admin' ? colors.greenAccent[600] : colors.greenAccent[700]}
             borderRadius='4px'
            >
            {access=== 'admin' && <AdminPanelSettingsOutlinedIcon />}
            {access==='manager' && <SecurityOutlinedIcon /> }
            {access==='user' && <LockOpenOutlinedIcon /> }
            <Typography color={colors.grey[100]} sx={{ml:'5px'}}>{access}</Typography>
            </Box>
         )
     }
    },
  ];
  return (
    <section className="p-2 mx-4 my-2">
      <Header title={"TEAM"} subtitle={"Managing the Team Members"}></Header>
      <Box height={'75vh'} marginTop={'40px'} 
       sx={{
        "& .MuiDataGrid-root":{
            border:"none",
        },
        "& .MuiDataGrid-cell":{
           borderBottom:'none'
        },
        "& .name-column--cell":{
            color:colors.greenAccent[300]
        },
        "& .MuiDataGrid-columnHeaders":{
            backgroundColor:colors.blueAccent[700],
            border:'none'
        },
        "& .MuiDataGrid-virtualScroller":{
            backgroundColor:colors.primary[400],
        },
        "& .MuiDataGrid-footerContainer":{
            borderTop:'none',
            backgroundColor:colors.blueAccent[700],
        }
    }}
    >
        <DataGrid rows={mockDataTeam} columns={columns}></DataGrid>
      </Box>
    </section>
  );
};

export default Team;
