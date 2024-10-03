import React from 'react';
import {
  View,
  Pressable,
  Text,
  Button,
  StyleSheet,
  Linking,
  Platform,
} from 'react-native';

const PermissionsPage = () => {
  const openAppSettings = () => {
    if (Platform.OS === 'ios') {
      Linking.openURL('app-settings:');
    } else {
      Linking.openSettings();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Camera Permission Required</Text>
      <Text style={styles.description}>
        This app requires access to your camera to scan barcodes and identify
        products.
      </Text>
      <Pressable style={styles.button} onPress={openAppSettings}>
        <Text style={styles.buttonText}>Open Settings</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#edc5c2',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'brown',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 30,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    margin: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PermissionsPage;
