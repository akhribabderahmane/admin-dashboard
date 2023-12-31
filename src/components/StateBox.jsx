import { useTheme,Box,Typography } from "@mui/material";
import { tokens } from "../context/ThemeContext";
import ProgressCircle from "./ProgressCircle";

const StateBox = ({title,subtitle,icon,progress,increase}) => {
    const theme=useTheme()
    const colors=tokens(theme.palette.mode);
    return ( 
        <Box width={'100%'} m={'0 30px'} >
           <Box display={'flex'} justifyContent={'space-between'} >
             {icon}
             <Typography variant="h6" fontWeight={'bold'} sx={{color:colors.grey[100]}}>
               {title}
             </Typography>
           </Box>
           <Box>
            <ProgressCircle progress={progress}></ProgressCircle>
           </Box>
           <Box display={'flex'} justifyContent={'space-between'} >
              <Typography variant="h7" fontWeight={'bold'} sx={{color:colors.greenAccent[500]}}>{subtitle} </Typography>
              <Typography variant="h6" fontStyle={'italic'} sx={{color:colors.greenAccent[600]}}>
               {increase}
             </Typography>
           </Box>
        </Box>
     );
}
 
export default StateBox;