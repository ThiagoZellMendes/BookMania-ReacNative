import Router from '@/main/routes/index.stack.routes';
import theme from '@/presentation/styles/theme';
import {
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';
import { useFonts } from 'expo-font';

import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { ThemeProvider } from 'styled-components/native';

export function App() {
  const [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hide();
    }
  }, [fontsLoaded]);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor={'transparent'} />
      <Router />
    </ThemeProvider>
  );
}
