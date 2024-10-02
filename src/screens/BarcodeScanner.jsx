import React, {useState} from 'react';
import { View, Text, Vibration, StyleSheet, ActivityIndicator } from 'react-native';
import { Camera, useCodeScanner, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';


const BarcodeScanner = ({ navigation }) => {

    const [isProcessing, setIsProcessing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const codeScanner = useCodeScanner({
        codeTypes: ['ean-13', 'upc-a', 'upc-e'],
        onCodeScanned: (codes) => {

          if (isProcessing) {
            return;
          }

          for (const code of codes) {
            setIsProcessing(true);
            Vibration.vibrate(100);
            fetchProduct(code);
            break;
          }
        }
    })

    const fetchProduct = async (code) => {
      try {

        setIsLoading(true);

        console.log('Code identified:', code.value);
        const response = await fetch(`https://world.openfoodfacts.org/api/v2/product/${code.value}.json`);
        const data = await response.json();

        if(data.status == 1) {
          console.log('Name:', data.product.product_name)
          navigation.navigate('Results', { data: data });
        } else {
          console.log('Could not fetch product.');
          Alert.alert('Product not found', 'This product is not in the database.');
          setIsProcessing(false); // Allow scanning again
          setIsLoading(false);
        }

      } catch(error) {
        console.log('Error while fetching product:', error);
        Alert.alert('Error', 'Unable to fetch product data.');
        setIsProcessing(false); // Allow scanning again
        setIsLoading(false);
      }
    }
    
    const device = useCameraDevice('back')
    const { hasPermission } = useCameraPermission()

    if (!hasPermission) return <PermissionsPage />
    if (device == null) return <NoCameraDeviceError />
    
    return (
        

        <View style={styles.container}>
          {/* camera */}
          <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={!isLoading}
          codeScanner={codeScanner}
          />
          
          {/* loading indicator */}
          {isLoading &&
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color="#ffffff" />
            <Text style={styles.loadingText}>Fetching product data...</Text>
          </View>
          }
        </View>
    )

};

const styles = StyleSheet.create({
  container: { flex: 1 },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)', // Semi-transparent background
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 16,
    color: '#ffffff',
    fontSize: 16,
  },
});


export default BarcodeScanner;
