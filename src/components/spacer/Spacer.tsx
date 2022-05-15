import React from 'react';
import { DefaultTheme } from 'styled-components';
import styled, { useTheme } from 'styled-components/native';

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
  xl: 4,
  xxl: 5,
};

const positionVariant = {
  top: 'marginTop',
  left: 'marginLeft',
  right: 'marginRight',
  bottom: 'marginBottom',
};

const getVariant = (
  position: keyof typeof positionVariant,
  size: keyof typeof sizeVariant,
  theme: DefaultTheme
) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
};

const SpacerView = styled.View<{ variant: ReturnType<typeof getVariant> }>`
  ${({ variant }) => variant};
`;

const Spacer = ({
  position,
  size,
  children,
}: {
  position: keyof typeof positionVariant;
  size: keyof typeof sizeVariant;
  children?: React.ReactNode;
}) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);

  return <SpacerView variant={variant}>{children}</SpacerView>;
};

export default Spacer;
