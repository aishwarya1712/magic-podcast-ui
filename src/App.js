import './App.css';
import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import CreateBriefing from './components/CreateBriefing';
import NoPage from './components/NoPage';
import Home from './components/Home';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D96F22', // Replace '#yourColor' with your desired color
    },
  },
  
  components: {
    // Apply global styles
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#000000', // Replace with your desired color
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="createbriefing" element={<CreateBriefing />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
