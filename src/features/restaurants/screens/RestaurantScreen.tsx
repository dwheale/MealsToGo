import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

import RestaurantInfoCard from '../components/RestaurantInfoCard';

const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar
          placeholder="Search"
          onChangeText={(query) => setSearchQuery(query)}
          value={searchQuery}
        />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
  },
});

export default RestaurantScreen;
