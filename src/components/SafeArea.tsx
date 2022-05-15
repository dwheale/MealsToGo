import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

type Props = {
  children: React.ReactNode;
};

const SafeArea: React.FC<Props> = ({ children }) => (
  <SafeAreaView style={styles}>{children}</SafeAreaView>
);

const styles = {
  flex: 1,
  marginTop: StatusBar.currentHeight || 0,
};

export default SafeArea;
