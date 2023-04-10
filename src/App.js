import CssBaseline from '@mui/material/CssBaseline';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import { useSelector } from "react-redux";
import { themeSettings } from "./theme";
import { useMemo } from "react";
import { useGetProductsQuery } from './state/api'

import { BrowserRouter as Router, Navigate, Routes, Route} from "react-router-dom";
import Dashboard from './scenes/dashboard';
import Layout from './scenes/layout';
import Products from './scenes/products'
import Customers from './scenes/customers';
import Transactions from './scenes/transactions';
import Geography from './scenes/geography';
import Overview from './scenes/overview'
import Daily from './scenes/daily';
import Monthly from './scenes/monthly';
import Breakdown from './scenes/breakdown';
import Admin from './scenes/admin';
import Performance from './scenes/performance';
import LandingPage from './scenes/landingpage';

import { Box } from '@mui/material';
import Header from './components/Header';


export default function App() {
  const mode = useSelector((state)=> state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  const { data, isLoading } = useGetProductsQuery();
  console.log(data);
  return (
    <div className="app">
      {/* <Box  m="1.5rem 2.5rem">
      <Header title="PRODUCTS" subtitle="See your list of products." />
      </Box> */}
      <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<Layout />} exact>
            <Route path="/" element={<Navigate to="/dashboard" replace />} exact />
            <Route path='/dashboard' element={<Dashboard />} exact />
            <Route path='/products' element={<Products/>} exact />
            <Route path='/customers' element={<Customers/>} exact />
            <Route path='/transactions' element={<Transactions/>} exact />
            <Route path='geography' element={<Geography/>} exact />
            <Route path='/overview' element={<Overview/>} exact />
            <Route path='/daily' element={<Daily/>} exact />
            <Route path='/monthly' element={<Monthly/>} exact />
            <Route path='/breakdown' element={<Breakdown/>} exact />
            <Route path='/admin' element={<Admin/>} exact />
            <Route path='/performance' element={<Performance/>} exact />
          </Route>
        </Routes>
      </ThemeProvider>
      </Router>
    </div>
  );
}

