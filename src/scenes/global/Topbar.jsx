import {Box,IconButton} from '@mui/material'
import {InputBase} from '@mui/material'
import { useContext } from 'react';
import { ColorModeContext,themeSetting,tokens, useMode } from '../../context/ThemeContext';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from '@emotion/react';
const Topbar = () => {
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);
    const colorMode=useContext(ColorModeContext)
    return ( 
        <section className=' flex justify-between p-2'>
            {/* search bar */}
             <div className="search-bar flex rounded-[3px]" style={{background:colors.primary[400]}}>
              <InputBase className='ml-2 flex-1' placeholder='search' style={{color:colors.grey[100]}} />
              <IconButton type='button' className='p-1'>
                <SearchIcon className=""></SearchIcon>
              </IconButton>
             </div>
             {/* icons part */}
             <div className="icons flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                   {theme.palette.mode === 'dark' ? 
                   (<DarkModeOutlinedIcon />)
                   :(<LightModeOutlinedIcon />)
                }

                </IconButton>
                <IconButton>
                     <NotificationsOutlinedIcon></NotificationsOutlinedIcon>
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <PersonOutlineOutlinedIcon />
                </IconButton>
             </div>
        </section>
     );
}
 
export default Topbar;