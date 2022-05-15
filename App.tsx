import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import RestaurantScreen from './src/features/restaurants/screens/RestaurantScreen';
import theme from './src/infrastructure/theme';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
};

export default App;
