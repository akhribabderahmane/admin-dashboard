import React from "react";
import { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { IconButton, useTheme, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../context/ThemeContext";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import adminImage from "../../assets/akhrib.png";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};
const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [iscollapsed, setisCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868bf5 !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={iscollapsed}>
        <Menu iconShape="square">
          <MenuItem
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
            onClick={()=> setisCollapsed(!iscollapsed)}
            icon={iscollapsed ? <MenuOutlinedIcon /> : undefined}
          >
            {/* admin + menuicon that collapse the sidebar */}
            {!iscollapsed && (
              <Box className="flex justify-between items-center ml-4">
                <p style={{ color: colors.grey[100] }} className="text-lg">
                  ADMINIS
                </p>
                <IconButton>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* user */}
          {!iscollapsed && (
            <Box className="mb-6">
              <Box className="flex justify-center items-center">
                <img
                  src={adminImage}
                  className=" w-24 aspect-square rounded-full cursor-pointer"
                />
              </Box>
              <Box className="text-center">
                <h2
                  className="font-bold text-2xl mt-2"
                  style={{ color: `${colors.grey[100]}` }}
                >
                  Akhrib mee
                </h2>
                <h5
                  className="text-xs"
                  style={{ color: `${colors.greenAccent[500]}` }}
                >
                  VP Fancy Admin
                </h5>
              </Box>
            </Box>
          )}

          {/* menu items */}
          <Box paddingLeft={iscollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            ></Item>
            <Typography
              className="text-xs"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            ></Item>
            <Item
              title="Contacts information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            ></Item>
            <Item
              title="Incvoices balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            ></Item>
             <Typography
              className=" text-xs  "
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            ></Item>
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            ></Item>
            <Item
              title="FAQ page"
              to="/faq"
              icon={<HelpOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            ></Item>
             <Typography
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            ></Item>
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            ></Item>
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            ></Item>
            <Item
              title="Geography"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            ></Item>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;

// <ProSidebar>
// <Box   style={{
//         margin: "10px 0 20px 0",
//         color: colors.grey[100],
//       }}>
// {true && (
//   <Box
//     display="flex"
//     justifyContent="space-between"
//     alignItems="center"
//     mx="15px"
//   >
//     <p style={{ color: colors.grey[100] }} className="text-lg">
//       ADMINIS
//     </p>
//     <IconButton>
//       <MenuOutlinedIcon />
//     </IconButton>
//   </Box>
// )}

// </Box>
// </ProSidebar>
