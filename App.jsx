import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import ResultsScreen from './src/screens/ResultsScreen';
import BarcodeScanner from './src/screens/BarcodeScanner';

const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Results"
            component={ResultsScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="BarcodeScanner"
            component={BarcodeScanner}
            options={{
              title: 'Scan a product barcode',
              headerStyle: {
                backgroundColor: '#edc5c2',
              },
              headerBackTitleStyle: {
                color: '#333',
              },
              headerTintColor: '#333',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
