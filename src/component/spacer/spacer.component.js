import React from "react";
import { useTheme } from "styled-components";
import styled from "styled-components/native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "margin-top",
  left: "margin-left",
  right: "margin-right",
  bottom: "margin-bottom",
};

const getVariant = (position, size, theme) => {
  const currentSizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[currentSizeIndex];
  return `${property}:${value}`;
};

export const Spacer = styled.View`
  ${({ variant }) => variant}
`;
export const SpaceView = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <Spacer variant={variant}>{children}</Spacer>;
};
SpaceView.defaultProps = {
  position: "top",
  size: "small",
};
