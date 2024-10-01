import React, { useState, useCallback } from 'react';
import { View, Button, Image, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import TextRecognition from '@react-native-ml-kit/text-recognition';


const CameraScreen = ({ navigation }) => {

  const [imageUri, setImageUri] = useState(null);
  const [text, setText] = useState(null);

  const onCameraPress = useCallback(() => {
    const options = {
      saveToPhotos: false,
      mediaType: 'photo'
    }

    ImagePicker.launchCamera(options, async res => {
      if (res.didCancel) {
        console.log('User cancelled image picker')
      } else if (res.errorCode) {
        console.log('ImagePicker Error: ', res.errorMessage)
      } else {
        console.log(res)
        const uri = res.assets[0].uri;
        setImageUri(uri);
        // do OCR
        const result = await TextRecognition.recognize(uri);
        setText(result.text);
      }
    })

  })

  return (
    <View style={styles.container}>
      <Button title="Take Photo" onPress={onCameraPress} />
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      {text && <Text>{text}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: 200, height: 200, marginTop: 20 },
});

export default CameraScreen;
