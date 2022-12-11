import React from "react";
import { Avatar, Button, Card, Paragraph } from "react-native-paper";
import { StyleSheet, Image } from "react-native";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../assets/star";
import open from "../../../assets/open";
import { Spacer, SpaceView } from "../../../component/spacer/spacer.component";
import {
  RestaurantCard,
  RestaurantContent,
  Info,
  Section,
  Rating,
  SectionEnd,
  Address,
} from "./restaurant-info.styles";
import { Text } from "../../../component/typography/text.component";
// import { space } from "../../../infrastructure/theme/spacings";
// import { colors } from "../../../infrastructure/theme/colors";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantContent source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((ele, index) => (
              <SvgXml xml={star} width={20} height={20} key={String(index)} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <SpaceView position="left" size="large">
                <Text variant="error">CLOSED TEMPORARILY</Text>
              </SpaceView>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <SpaceView position="left" size="large">
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </SpaceView>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
