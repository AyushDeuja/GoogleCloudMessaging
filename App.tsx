import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';

import {
  requestUserPermission,
  NotificationListener,
} from './src/NotificationHandler';

import Splash from './src/Splash';
import SignUp from './src/SignUp';
import Home from './src/Home';

import { ThemeProvider } from 'react-native-magnus';
import Login from './src/Login';
import AddTodoScreen from './src/AddTodoScreen';
import EditTodoScreen from './src/EditTodoScreen';

export const theme = {
  colors: {
    bgColor: '#5C95F8',
    btnColor: '#51E6A6',
  },
};

const Stack = createNativeStackNavigator();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [initialRoute, setInitialRoute] = useState<string | null>(null);

  useEffect(() => {
    requestUserPermission();
    NotificationListener();

    const initializeApp = async () => {
      await new Promise(res => setTimeout(res, 1000)); //for splash

      const token = await AsyncStorage.getItem('token');
      if (token) {
        try {
          const decoded: any = jwtDecode(token);
          const isExpired = decoded.exp * 1000 < Date.now();
          setInitialRoute(isExpired ? 'Login' : 'Home');
        } catch (err) {
          console.log('Invalid token:', err);
          setInitialRoute('Login');
        }
      } else {
        setInitialRoute('Login');
      }

      setShowSplash(false);
    };

    initializeApp();
  }, []);

  if (showSplash) {
    // Show splash screen only
    return <Splash />;
  }

  if (!initialRoute) {
    // Prevent rendering navigator until initialRoute is known
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={initialRoute}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AddTodo" component={AddTodoScreen} />
          <Stack.Screen name="EditTodo" component={EditTodoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
