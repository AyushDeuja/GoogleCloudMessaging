import React, { useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import {
  NotificationListener,
  requestUserPermission,
} from './src/NotificationHandler';

const App = () => {
  useEffect(() => {
    // Ask user for permission and get FCM token
    requestUserPermission();

    // Setup all FCM listeners
    NotificationListener();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>React Native Firebase Push Notification</Text>
      <Text style={styles.subtitle}>FCM is now initialized 🎉</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#444',
  },
});
