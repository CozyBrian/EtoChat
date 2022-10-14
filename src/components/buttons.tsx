import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styled from "styled-components";

interface props {
  children: string;
  onPress: () => void;
}

const Gradient = styled(TouchableOpacity)`
  align-items: center;
  padding: 16px;
  margin-left: 24px;
  margin-right: 24px;
  background-color: #2b92ff;
  border-radius: 999px;
`;

const GradientO = styled(TouchableOpacity)`
  align-items: center;
  padding: 16px;
  margin-left: 24px;
  margin-right: 24px;
  border: 1px solid #2b92ff;
  border-radius: 999px;
`;

const ButtonContainer = styled(View)`
  width: 100%;
  padding-top: 4px;
  padding-bottom: 4px;
`;
interface buttonStyle {
  color: string;
}
const ButtonText = styled(Text)`
  color: ${(props: buttonStyle) => `${props.color}`};
  font-weight: 600;
  font-size: 18px;
`;

export const GradientButton = ({ children, onPress }: props) => {
  return (
    <ButtonContainer>
      <Gradient onPress={onPress}>
        <ButtonText color="white">{children}</ButtonText>
      </Gradient>
    </ButtonContainer>
  );
};

export const GradientOButton = ({ children, onPress }: props) => {
  return (
    <ButtonContainer>
      <GradientO onPress={onPress}>
        <ButtonText color="#2b92ff">{children}</ButtonText>
      </GradientO>
    </ButtonContainer>
  );
};
