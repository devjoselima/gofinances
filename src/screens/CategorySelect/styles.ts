import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from '@expo/vector-icons'

import { colors, fonts } from "../../theme";

interface CategoryProps {
  isActive: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;

  background-color: ${colors.primary};

  align-items: center;
  justify-content: flex-end;
  padding-bottom: 20px;
`;

export const Title = styled.Text`
  font-family: ${fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${colors.shape};
`;

export const Category = styled.TouchableOpacity<CategoryProps>`
  width: 100%;
  padding: ${RFValue(15)}px;

  flex-direction: row;
  align-items: center;

  background-color: ${({ isActive } : any) => 
    isActive ?  colors.secondary_light : colors.background
  };
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  margin-right: 16px;
`;

export const Name = styled.Text`
  font-family: ${fonts.regular};
  font-size: ${RFValue(18)}px;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${colors.text};
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;