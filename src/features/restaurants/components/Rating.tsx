import React from 'react';
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';

import star from '../../../../assets/star';

const RatingView = styled.View`
  flex-direction: row;
  padding-top: ${({ theme }) => theme.space[1]};
  padding-bottom: ${({ theme }) => theme.space[1]};
`;

type Props = {
  rating: number;
  name: string;
};

const Rating: React.FC<Props> = ({ rating, name }) => {
  const ratingArray = [...Array.from({ length: Math.ceil(rating) })];

  return (
    <RatingView>
      {ratingArray.map((_, i) => (
        <SvgXml xml={star} key={`rating_${name}_${i}`} width="20" height="20" />
      ))}
    </RatingView>
  );
};

export default Rating;
