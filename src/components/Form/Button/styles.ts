import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";


import { colors, fonts } from "../../../theme";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  background-color: ${colors.secondary};

  padding: 18px;
  border-radius: 5px;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${fonts.medium};
  font-size: ${RFValue(14)}px;

  color: ${colors.shape};
`;