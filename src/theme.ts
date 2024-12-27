'use client';

import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#000', // Cor primária
    },
    secondary: {
      main: '#ddd', // Cor secundária
    },
    background: {
      default: '#f4f4f4', // Cor de fundo
    },
  },
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
});

export default theme;