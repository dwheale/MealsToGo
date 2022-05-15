import Ionicons from '@expo/vector-icons/Ionicons';
import { Lato_400Regular } from '@expo-google-fonts/lato';
import { Oswald_400Regular, useFonts } from '@expo-google-fonts/oswald';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native-paper';
import { ThemeProvider } from 'styled-components';

import SafeArea from './src/components/SafeArea';
import RestaurantScreen from './src/features/restaurants/screens/RestaurantScreen';
import theme from './src/infrastructure/theme';
import { MainBottomTabParamList } from './src/navigation/MainBottomTabParams';

const Tab = createBottomTabNavigator<MainBottomTabParamList>();

const SettingsScreen = () => <Text>Settings!</Text>;

const MapScreen = () => <Text>Map!</Text>;

const getIcon =
  (route: { name: string }) =>
  ({
    color,
    size,
    focused,
  }: {
    color: string;
    size: number;
    focused: boolean;
  }) => {
    let iconName;

    switch (route.name) {
      case 'Restaurants': {
        iconName = focused ? 'ios-restaurant' : 'ios-restaurant-outline';
        break;
      }
      case 'Map': {
        iconName = focused ? 'ios-map' : 'ios-map-outline';
        break;
      }
      case 'Settings': {
        iconName = focused ? 'ios-settings' : 'ios-settings-outline';
        break;
      }
      default:
        iconName = 'ios-question';
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return <Ionicons name={iconName} size={size} color={color} />;
  };

const App = () => {
  const [fontsLoaded] = useFonts({
    Oswald_400Regular,
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeArea>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: getIcon(route),
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen
              name="Restaurants"
              component={RestaurantScreen}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="Map"
              component={MapScreen}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="Settings"
              component={SettingsScreen}
              options={{ headerShown: false }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </SafeArea>
  );
};

export default App;
