import { Image } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${({ theme }) => theme.space[3]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;
export const RestaurantCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;
export const Info = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;
export const Address = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  color: ${({ theme }) => theme.colors.ui.primary};
`;
export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
export const RestaurantIcon = styled(Image)`
  margin-left: ${({ theme }) => theme.space[2]};
  width: ${({ theme }) => theme.space[3]};
  height: ${({ theme }) => theme.space[3]};
`;
