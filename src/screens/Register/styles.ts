import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { colors, fonts } from "../../theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;

export const Header = styled.View`
  background-color: ${colors.primary};

  width: 100%;
  height: ${RFValue(113)}px;

  align-items: center;
  justify-content: flex-end;

  padding-bottom: 20px;
`;

export const Title = styled.Text`
  color: ${colors.shape};
  font-family: ${fonts.regular};

  font-size: ${RFValue(18)}px;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: space-between;
  
  width: 100%;
  padding: 24px;
`;

export const Fields = styled.View``;

export const TransactionButtons = styled.View`
  flex-direction: row;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 16px;

  justify-content: space-between;
`;