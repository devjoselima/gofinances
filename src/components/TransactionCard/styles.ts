import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from '@expo/vector-icons'

import { colors, fonts } from "../../theme";

interface TransactionProps {
  type: 'positive' | 'negative';
}

export const Container = styled.View`
  background-color: ${colors.shape};
  border-radius: 5px;

  padding: 16px 24px;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${fonts.regular};

  margin-bottom: 16px;
`;
export const Amount = styled.Text<TransactionProps>`
  font-size: ${RFValue(20)}px;
  font-family: ${fonts.medium};
  margin-top: 2px;

  color: ${({ type }: any) => type === 'positive' ? colors.success : colors.attention}
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 19px;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${colors.text};
`;

export const CategoryName = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${colors.text};

  margin-left: 16px;
`;

export const Date = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${colors.text};
`;