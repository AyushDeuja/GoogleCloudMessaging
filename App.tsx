import React, { useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import {
  NotificationListener,
  requestUserPermission,
} from './src/NotificationHandler';
import LoginMagnus from './src/LoginMagnus';
import Splice from './src/Splice';

const App = () => {
  useEffect(() => {
    // Ask user for permission and get FCM token
    requestUserPermission();

    // Setup all FCM listeners
    NotificationListener();
  }, []);

  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>React Native Firebase Push Notification</Text>
    //   <Text style={styles.subtitle}>FCM is now initialized 🎉</Text>
    // </View>
    <Splice />
    // <LoginMagnus />
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
  },
});
