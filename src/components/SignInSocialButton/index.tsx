import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";
import { Button, ImageContainer, Text } from "./styles";

interface SignInSocialButtonProps {
  title: string;
  svg: React.FC<SvgProps>;
}

export function SignInSocialButton({
  title,
  svg: Svg
}) {
  return (
    <Button>
      <ImageContainer>
        <Svg />
      </ImageContainer>
      <Text>{title}</Text>
    </Button>
  );
}