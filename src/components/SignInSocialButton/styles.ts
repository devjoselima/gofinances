import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { colors, fonts } from '../../theme';


export const Button = styled.TouchableOpacity`
  height: ${RFValue(56)}px;
  background-color: ${colors.shape};
  border-radius: 5px;
  align-items: center;
  flex-direction: row;
  margin-bottom: 16px;
`
export const ImageContainer = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: ${RFValue(16)}px;
  border-color: ${colors.background};
  border-right-width: 1px;
`
export const Text = styled.Text`
  flex: 1;
  text-align: center;
  font-family: ${fonts.medium};
  font-size: ${RFValue(14)}px;;
`