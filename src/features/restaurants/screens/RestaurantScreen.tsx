import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

import Spacer from '../../../components/spacer/Spacer';
import { RestaurantsContext } from '../../../services/restaurants/RestaurantContext';
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

const RestaurantScreen = () => {
  const restaurantContext = React.useContext(RestaurantsContext);
  const [searchQuery, setSearchQuery] = React.useState('');
  const { restaurants } = restaurantContext;

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
        data={restaurants}
        renderItem={renderItem}
        keyExtractor={(item: IRestaurant) => item.name}
      />
    </>
  );
};

export default RestaurantScreen;
