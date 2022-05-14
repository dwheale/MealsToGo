import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

const App = () => {
  console.log('StatusBar.currentHeight:', StatusBar.currentHeight);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Text>Search</Text>
        </View>
        <View style={styles.list}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      {/* eslint-disable-next-line react/style-prop-object */}
      <ExpoStatusBar style="auto" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  search: {
    padding: 16,
    backgroundColor: 'green',
  },
  list: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 16,
  },
});

export default App;
