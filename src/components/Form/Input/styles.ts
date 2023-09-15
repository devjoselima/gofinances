import styled from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { colors, fonts } from "../../../theme";

export const Container = styled(TextInput)`
  width: 100%;
  padding: 16px 18px;
  margin-bottom: 8px;

  font-size: ${RFValue(14)}px;
  font-family: ${fonts.regular};
  color: ${colors.text_dark};

  background-color: ${colors.shape};
  border-radius: 5px;
`;