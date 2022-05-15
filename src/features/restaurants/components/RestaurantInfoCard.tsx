import React from 'react';
import { SvgXml } from 'react-native-svg';

import open from '../../../../assets/open';
import Text from '../../../components/typography/Text';
import Rating from './Rating';
import {
  Address,
  Info,
  RestaurantCard,
  RestaurantCardCover,
  RestaurantIcon,
  Section,
  SectionEnd,
} from './RestaurantInfoCardStyles';

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
    name = 'My Fancy-Ass B&B',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 some random street',
    isOpen = true,
    rating = 4,
    isClosedTemporarily = 1,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Section>
          <Text variant="label">{name}</Text>
          <RestaurantIcon source={{ uri: icon }} />
        </Section>
        <Section>
          <Rating rating={rating} name={name} />
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            {isOpen && <SvgXml xml={open} width="24" height="24" />}
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
