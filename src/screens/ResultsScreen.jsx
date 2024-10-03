import {View, Text, StyleSheet, ScrollView, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';

export default function ResultsScreen({route, navigation}) {
  const {data} = route.params;
  product = data.product;

  const productName = product.product_name;
  const brand = product.brands;
  const allergens = product.allergens_tags;
  const nutriScore = product.nutrition_grade_fr;
  const ecoScore = product.ecoscore_grade;

  const formatTags = tags =>
    tags.map(tag => tag.replace(/en:/, '').replace(/-/g, ' ')).join(', ');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.productName}>{productName}</Text>
      {brand && <Text style={styles.brand}>by {brand}</Text>}

      {/* allergens */}
      <View style={styles.infoSection}>
        <Text style={styles.sectionHeader}>Allergens</Text>
        {allergens.length != 0 ? (
          <View style={styles.allergensContainer}>
            <Text style={styles.text}>{formatTags(allergens)}</Text>
          </View>
        ) : (
          <Text style={styles.naText}>
            This product contains no allergens according to its description.
          </Text>
        )}
      </View>

      {/* nutri score */}
      <View style={styles.infoSection}>
        <Text style={styles.sectionHeader}>Nutritional Score</Text>
        {nutriScore != 'not-applicable' ? (
          <View style={styles.scoreContainer}>
            <View
              style={[
                styles.nutriScoreBadge,
                styles[`nutriScore_${nutriScore.toLowerCase()}`],
              ]}>
              <Text style={styles.nutriScoreText}>
                {nutriScore.toUpperCase()}
              </Text>
            </View>
          </View>
        ) : (
          <Text style={styles.naText}>
            Nutritinal score is not applicable for this product.
          </Text>
        )}
      </View>

      {/* eco score */}
      <View style={styles.infoSection}>
        <Text style={styles.sectionHeader}>Ecological Score</Text>
        {ecoScore != 'not-applicable' ? (
          <View style={styles.scoreContainer}>
            <View
              style={[
                styles.ecoScoreBadge,
                styles[`ecoScore_${ecoScore.toLowerCase()}`],
              ]}>
              <Text style={styles.ecoScoreText}>{ecoScore.toUpperCase()}</Text>
            </View>
          </View>
        ) : (
          <Text style={styles.naText}>
            Ecological score is not applicable for this product.
          </Text>
        )}
      </View>

      <View style={styles.bottomSection}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('BarcodeScanner')}>
          <Text style={styles.buttonText}>Scan another barcode</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#edc5c2',
  },
  productName: {
    marginTop: 40,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  brand: {fontSize: 18, color: 'brown', marginBottom: 16, textAlign: 'center'},
  sectionHeader: {fontSize: 20, fontWeight: 'bold', marginBottom: 8},
  text: {fontSize: 16, marginBottom: 4, textAlign: 'center'},
  scoreContainer: {alignItems: 'center', marginVertical: 8},
  nutriScoreBadge: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  nutriScoreText: {fontSize: 24, fontWeight: 'bold', color: '#fff'},
  ecoScoreBadge: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  ecoScoreText: {fontSize: 24, fontWeight: 'bold', color: '#fff'},
  // Nutri-Score styles based on grade
  nutriScore_a: {backgroundColor: '#009E73'},
  nutriScore_b: {backgroundColor: '#77AB43'},
  nutriScore_c: {backgroundColor: '#EEC20B'},
  nutriScore_d: {backgroundColor: '#F68B33'},
  nutriScore_e: {backgroundColor: '#D71920'},
  nutriScore_unknown: {backgroundColor: '#888888'},
  // Eco-Score styles based on grade
  ecoScore_a: {backgroundColor: '#009E73'},
  ecoScore_b: {backgroundColor: '#77AB43'},
  ecoScore_c: {backgroundColor: '#EEC20B'},
  ecoScore_d: {backgroundColor: '#F68B33'},
  ecoScore_e: {backgroundColor: '#D71920'},
  ecoScore_unknown: {backgroundColor: '#888888'},
  allergensContainer: {marginTop: 16, alignItems: 'center'},
  infoSection: {alignItems: 'center', marginTop: 30},
  button: {
    marginTop: 30,
    backgroundColor: 'brown',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 30,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  naText: {
    fontSize: 18,
  },
  bottomSection: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 60,
  },
});
