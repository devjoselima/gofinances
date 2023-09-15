import styled, { css } from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'

import { colors, fonts } from '../../theme'

interface TypeProps {
  type: 'up' | 'down' | 'total';
}


export const Container = styled.View<TypeProps>`
  background-color: ${({ type }: any) => type === 'total' ? colors.secondary : colors.shape};

  width: ${RFValue(300)}px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: 16px;

  border-radius: 7px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
  font-size: ${RFValue(14)}px;
  font-family: ${fonts.regular};

  color: ${({ type }: any) => type === 'total' ? colors.shape : colors.text_dark};
`;

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(40)}px;

  ${(props: any) => props.type === 'up' && css`
    color: ${colors.success}
  `};

  ${(props: any) => props.type === 'down' && css`
    color: ${colors.attention}
  `};

  ${(props: any) => props.type === 'total' && css`
    color: ${colors.shape}
  `};
`;

export const Content = styled.View``;

export const Amount = styled.Text<TypeProps>`
  color: ${({ type }: any) => type === 'total' ? colors.shape : colors.text_dark};

  font-family: ${fonts.medium};
  font-size: ${RFValue(32)}px;

  margin-top: 38px;
`;

export const LastTransaction = styled.Text<TypeProps>`
  color: ${({ type }: any) => type === 'total' ? colors.shape : colors.text};

  font-family: ${fonts.regular};
  font-size: ${RFValue(12)}px;
`;