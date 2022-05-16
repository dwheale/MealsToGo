import React from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';
import styled from 'styled-components/native';

const SpinnerView = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const ActivityIndicatorStyled = styled(ActivityIndicator)`
  margin-left: -25px;
`;

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type ColorTypes = RGB | RGBA | HEX;

type Props = {
  color?: ColorTypes;
  size?: number;
};

const Spinner: React.FC<Props> = ({ color = Colors.blue300, size = 50 }) => (
  <SpinnerView>
    <ActivityIndicatorStyled animating size={size} color={color} />
  </SpinnerView>
);

export default Spinner;
