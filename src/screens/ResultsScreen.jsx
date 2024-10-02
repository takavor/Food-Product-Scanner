import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React, {useState, useEffect} from 'react'

export default function ResultsScreen({route}) {
    
    const {imageUri, ocrResult} = route.params;
    const [ingredientsText, setIngredientsText] = useState('');

    useEffect(() => {
        const extractIngredients = () => {
            const ingredientsKeywords = ['ingredients', 'ingredient', 'ingredients:', 'ingredient:']
            
            for (const block of ocrResult.blocks) {
                console.log('---BLOCK START---')
                console.log(block)
                console.log('---BLOCK END---')
            }

        }

        extractIngredients();
    })

    return (
    <ScrollView contentContainerStyle={styles.container}>
        {/* <Text>{ingredients}</Text> */}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: { flexGrow: 1, alignItems: 'center', padding: 16 },
    image: { width: '100%', height: undefined, aspectRatio: 1 },
    // text: { fontSize: 16, textAlign: 'left' },
  });