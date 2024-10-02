import React from 'react';
import { Vibration, StyleSheet } from 'react-native';
import { Camera, useCodeScanner, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';


const BarcodeScanner = ({ navigation }) => {

    const codeScanner = useCodeScanner({
        codeTypes: ['qr', 'ean-13', 'upc-a', 'upc-e'],
        onCodeScanned: (codes) => {
          for (const code of codes) {
            Vibration.vibrate(100);
            navigation.navigate('Results', {code: code})
          }
        }
    })
    
    const device = useCameraDevice('back')
    const { hasPermission } = useCameraPermission()

    if (!hasPermission) return <PermissionsPage />
    if (device == null) return <NoCameraDeviceError />
    
    return (
        <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        codeScanner={codeScanner}
        />
    )

};

const styles = StyleSheet.create({
  camera: { flex: 1 },
});

export default BarcodeScanner;
