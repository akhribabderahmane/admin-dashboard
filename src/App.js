import React from 'react'
import { ColorModeContext,tokens,useMode} from './context/ThemeContext';
import { CssBaseline,ThemeProvider } from '@mui/material';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import {Bar,Contacts,FAQ,Form,Geography,Invoices,Line,Pie,Team,Dashboard, CalendarPage} from './scenes'
import {Routes,Route} from 'react-router-dom'
import { useTheme } from '@emotion/react';
function App() {
  const [theme,colorMode]=useMode();
  const colors=tokens(theme.palette.mode)
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
       <div className="app flex relative overflow-hidden">
       <div className='overflow-y-scroll min-w-fit' style={{background:`${colors.primary[400]}`}}>
       <Sidebar></Sidebar>
       </div>
       <main className='content overflow-y-scroll'>
        <Topbar />
        <Routes>
         <Route path='/' element={<Dashboard />} />
         <Route path='/team' element={<Team />} />
         <Route path='/pie' element={<Pie />} />
         <Route path='/line' element={<Line />} />
         <Route path='/invoices' element={<Invoices />} />
         <Route path='/geography' element={<Geography />} />
         <Route path='/form' element={<Form />} />
         <Route path='/faq' element={<FAQ />} />
         <Route path='/contacts' element={<Contacts />} />
         <Route path='/bar' element={<Bar />} />
         <Route path='/calendar' element={<CalendarPage />} />
/        </Routes>
       </main>   
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
