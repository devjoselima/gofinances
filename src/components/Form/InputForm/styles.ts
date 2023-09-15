import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { colors, fonts } from "../../../theme";

export const Container = styled.View`
  width: 100%;
`;

export const Error = styled.Text`
  color: ${colors.attention};
  font-size: ${RFValue(14)}px;
  font-family: ${fonts.regular};
  margin: 7px 0;
`;