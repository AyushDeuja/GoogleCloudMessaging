import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';
import { Alert } from 'react-native';

export async function requestUserPermission(): Promise<void> {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    await getFcmToken();
  }
}

const getFcmToken = async (): Promise<void> => {
  try {
    const fcmToken = await messaging().getToken();
    console.log('FCM Token:', fcmToken);
  } catch (error) {
    console.error('Error fetching FCM token:', error);
  }
};

export const NotificationListener = (): void => {
  // Foreground notifications
  messaging().onMessage(
    async (remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
      Alert.alert(
        'A new FCM message!',
        JSON.stringify(remoteMessage.notification),
      );
    },
  );

  // Background message handler
  messaging().setBackgroundMessageHandler(
    async (remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
      console.log('Message handled in the background!', remoteMessage);
    },
  );

  // App opened from background by tapping notification
  messaging().onNotificationOpenedApp(
    (remoteMessage: FirebaseMessagingTypes.RemoteMessage | null) => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from background:',
          remoteMessage,
        );
      }
    },
  );

  // App launched from quit state by tapping notification
  messaging()
    .getInitialNotification()
    .then((remoteMessage: FirebaseMessagingTypes.RemoteMessage | null) => {
      if (remoteMessage) {
        console.log(
          'App opened from quit state by notification:',
          remoteMessage,
        );
      }
    });
};
