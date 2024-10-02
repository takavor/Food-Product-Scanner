import React from 'react';
import { StyleSheet } from 'react-native';
import { Camera, useCodeScanner, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';


const BarcodeScanner = ({ navigation }) => {

    const codeScanner = useCodeScanner({
        codeTypes: ['qr', 'ean-13', 'upc-a', 'upc-e'],
        onCodeScanned: (codes) => {
          for (const code of codes) {
            console.log(`Code ${code.value}`)
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
