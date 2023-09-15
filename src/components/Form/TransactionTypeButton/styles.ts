import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'
import { RFValue } from "react-native-responsive-fontsize";

import { colors, fonts } from "../../../theme";

interface IconProps {
  title: 'up' | 'down' ;
}

interface ContainerProps {
  isActive: boolean;
  type: 'up' | 'down';
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 48%;
  height: ${RFValue(56)}px;

  border-width: ${({ isActive }: any) => isActive ? 0 : 1.5}px;
  border-style: solid;
  border-color: ${colors.text};
  border-radius: 5px;

  padding: 16px;

  ${({ isActive, type }: any) => isActive && type == 'up' && css`
    background-color: ${colors.sucess_light};
  `};

  ${({ isActive, type }: any) => isActive && type == 'down' && css`
    background-color: ${colors.attention_light};
  `};
`;

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;

  color: ${({ theme, type }: any) => type === 'up' ? colors.success : colors.attention}
`;

export const Title = styled.Text`
  font-family: ${fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${colors.title};
`;
