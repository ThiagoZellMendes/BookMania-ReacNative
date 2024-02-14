import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import Router from './routes/router';
import theme from './src/global/theme';
import { BooksProvider } from './src/hooks/books';


export default function App(){

  return (
    <ThemeProvider theme={theme}>
      <StatusBar  backgroundColor="#FFFFFF" translucent={true} barStyle='dark-content' />
      <BooksProvider>
        <Router />
      </BooksProvider>  
    </ThemeProvider>
  );}
