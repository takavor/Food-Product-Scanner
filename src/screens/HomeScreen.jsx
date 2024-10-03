import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
  Image,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    // <ImageBackground
    // source={require('../../assets/background_image_3.png')}
    // resizeMode={'cover'}
    // style={{flex: 1, width: '100%'}}>
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.title}>Food Product Scanner</Text>
      </View>

      <View style={styles.middleSection}>
        <Text style={styles.description}>
          Discover insights about food products by simply scanning the barcode!
        </Text>
      </View>

      <View style={styles.bottomSection}>
        <Text style={styles.descriptionSmaller}>
          Get information on the product's nutritional and ecological value, as
          well as any allergens it contains.
        </Text>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('BarcodeScanner')}>
          <Text style={styles.buttonText}>Scan a product barcode</Text>
        </Pressable>
      </View>
    </View>
    // </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: '#edc5c2',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  topSection: {
    marginTop: 40,
    flex: 1,
    justifyContent: 'flex-start',
  },
  middleSection: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomSection: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 100,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    margin: 10,
  },
  description: {
    fontSize: 30,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  descriptionSmaller: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
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

export default HomeScreen;
