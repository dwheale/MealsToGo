import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-paper';

type Props = {
  restaurant?: {
    name: string;
    icon: string;
    photos: string[];
    address: string;
    isOpen: boolean;
    rating: number;
    isClosedTemporarily: boolean;
  };
};

const RestaurantInfoCard: React.FC<Props> = ({ restaurant = {} }) => {
  const {
    name = 'My Fancy Restaurant',
    icon,
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 some random street',
    isOpen = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
  },
  cover: {
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    padding: 16,
  },
});

export default RestaurantInfoCard;
