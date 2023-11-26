import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import backgroundImage from '../assets/background.jpg';
import Login from './Login'; 
import MainBoard from './MainBoard';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

const setBgImage = () => {
    const bgImage = `url(${backgroundImage})`;
    document.body.style.backgroundImage = bgImage;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
}

const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);

setBgImage();

root.render(
    <ThemeProvider theme={theme}>
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/main_window" element={<Login />} />
                <Route path="/main" element={<MainBoard />} />
            </Routes>
        </Router>
    </ThemeProvider>
);
