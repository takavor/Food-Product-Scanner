import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React, {useState, useEffect} from 'react'

export default function ResultsScreen({route}) {
    
    const {data} = route.params;
    return (
    <ScrollView contentContainerStyle={styles.container}>
        <Text>Product name is {data.product.product_name}</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: { flexGrow: 1, alignItems: 'center', padding: 16 },
    image: { width: '100%', height: undefined, aspectRatio: 1 },
  });