import React from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

import SafeArea from '../../../components/SafeArea';
import RestaurantInfoCard from '../components/RestaurantInfoCard';

const SearchContainer = styled.View`
  padding: 16px;
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: 16px;
`;

const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};

export default RestaurantScreen;
