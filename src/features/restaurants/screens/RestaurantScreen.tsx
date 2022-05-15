import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

import Spacer from '../../../components/spacer/Spacer';
import type { IRestaurant } from '../components/RestaurantInfoCard';
import RestaurantInfoCard from '../components/RestaurantInfoCard';

const SearchContainer = styled.View`
  padding: 16px;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})`` as unknown as new () => FlatList<IRestaurant>;

const data: IRestaurant[] = [
  {
    name: 'My Fancy-Ass B&B',
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos: [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address: '100 some random street',
    isOpen: true,
    rating: 4,
    isClosedTemporarily: false,
  },
  {
    name: 'My Fancy-Ass B&B2',
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos: [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address: '100 some random street',
    isOpen: true,
    rating: 4,
    isClosedTemporarily: false,
  },
  {
    name: 'My Fancy-Ass B&B3',
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos: [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address: '100 some random street',
    isOpen: true,
    rating: 4,
    isClosedTemporarily: false,
  },
];

const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const renderItem: ListRenderItem<IRestaurant> = ({ item }) => (
    <Spacer position="bottom" size="large">
      <RestaurantInfoCard restaurant={item} />
    </Spacer>
  );

  return (
    <>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </SearchContainer>
      <RestaurantList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item: IRestaurant) => item.name}
      />
    </>
  );
};

export default RestaurantScreen;
