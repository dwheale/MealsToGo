import React from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

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

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

const RestaurantInfoCard: React.FC<Props> = ({ restaurant = {} }) => {
  const {
    name = 'My Fancy-Ass Restaurant',
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
      <Title>{name}</Title>
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
});

export default RestaurantInfoCard;
