import React from 'react';
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
  padding: ${({ theme }) => theme.space[3]};
  color: ${({ theme }) => theme.colors.ui.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${({ theme }) => theme.space[3]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

const RestaurantCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
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
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
