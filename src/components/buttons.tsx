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

const ButtonContainer = styled(View)`
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
`;

const ButtonText = styled(Text)`
  color: white;
  font-weight: 600;
  font-size: 18px;
`;

const GradientButton = ({ children, onPress }: props) => {
  return (
    <ButtonContainer>
      <Gradient onPress={onPress}>
        <ButtonText>{children}</ButtonText>
      </Gradient>
    </ButtonContainer>
  );
};

export default GradientButton;
