// import React from 'react'
// // import StockDataUpload from './AdminComponents/Forms/StockDataUpload'
// // import Subscription from './userComponents/Subscription/Subscription'
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import LoginDetails from './LoginDetails/LoginDetails'


// import LandingPage from './LandingPage/LandingPage'
// import Home from './userComponents/Views/Home'
// import { Route, Routes, HashRouter as Router } from 'react-router-dom'
// import Notfound from './Static/Notfound'


// const App = () => {
 
//   return (
//     <Router>
//       <Routes>
//         <Route path='/' element={<LandingPage />} />
//         <Route path='/home' element={<Home />} />
//         <Route path='*' element={<Notfound />} />
//       </Routes>
//     </Router>
//   )
// }

// export default App





import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppRouter from './AppRouter'

const customTheme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: '2rem',
        },
    },
});

const App = () => {
    return (
        <ThemeProvider theme={customTheme}>
            <AppRouter />
        </ThemeProvider>
    );
};

export default App;
