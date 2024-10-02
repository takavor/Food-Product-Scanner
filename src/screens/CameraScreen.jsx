import React, { useState, useCallback } from 'react';
import { View, Button, ActivityIndicator, StyleSheet } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import TextRecognition from '@react-native-ml-kit/text-recognition';


const CameraScreen = ({ navigation }) => {

  const [imageUri, setImageUri] = useState(null);
  const [loading, setLoading] = useState(false);

  const onCameraPress = useCallback(async () => {
    
    setLoading(true);

    const options = {
      saveToPhotos: false,
      mediaType: 'photo'
    }

    try {
      const res = await ImagePicker.launchCamera(options);

      if (res.didCancel) {
        console.log('User cancelled image picker')
      } else if (res.errorCode) {
        console.log('ImagePicker Error:', res.errorMessage)
      } else {
        console.log(res);
        const uri = res.assets[0].uri
        setImageUri(uri)

        // extract text
        const result = await TextRecognition.recognize(uri)
        
        // navigate to results
        navigation.navigate('Results', {imageUri: uri, ocrResult: result})
      }
    } catch(error) {
      console.error('Error occured:', error)
    }

    setLoading(false);

  }, [navigation])

  return (
    <View style={styles.container}>
      <Button title="Take Photo" onPress={onCameraPress} />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default CameraScreen;
