import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';

import RestaurantScreen from './src/features/restaurants/screens/RestaurantScreen';

const App = () => {
  return (
    <>
      <RestaurantScreen />
      {/* eslint-disable-next-line react/style-prop-object */}
      <ExpoStatusBar style="auto" />
    </>
  );
};

export default App;
