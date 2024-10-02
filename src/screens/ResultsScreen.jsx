import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React, {useState, useEffect} from 'react'

export default function ResultsScreen({route}) {
    
    const {code} = route.params;

    return (
    <ScrollView contentContainerStyle={styles.container}>
        <Text>{code.value}</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: { flexGrow: 1, alignItems: 'center', padding: 16 },
    image: { width: '100%', height: undefined, aspectRatio: 1 },
    // text: { fontSize: 16, textAlign: 'left' },
  });