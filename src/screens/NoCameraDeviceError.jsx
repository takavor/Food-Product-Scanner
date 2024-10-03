import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NoCameraDeviceError = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>No Camera Detected</Text>
      <Text style={styles.description}>
        Unable to find a camera device on this device. Please check your device
        settings or try restarting your device.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
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
});

export default NoCameraDeviceError;
