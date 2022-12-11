import React from "react";

import { Searchbar } from "react-native-paper";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { RestaurantInfo } from "../component/restaurant-info.component";
import styled from "styled-components/native";
import { space } from "../../../infrastructure/theme/spacings";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight};
`;

const SearchView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const ListView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  flex: 1;
`;
export const RestaurantScreen = () => (
  <SafeArea>
    <SearchView>
      <Searchbar />
    </SearchView>
    <ListView>
      <RestaurantInfo />
    </ListView>
  </SafeArea>
);
