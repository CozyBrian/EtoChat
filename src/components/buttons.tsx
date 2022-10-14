import { Text, TextProps, TouchableOpacity, View } from "react-native";
import React from "react";
import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
interface props {
  children: string;
  onPress: () => void;
}

const Gradient = styled(LinearGradient)`
  align-items: center;
  padding: 16px;
  margin-left: 24px;
  margin-right: 24px;
  border-radius: 999px;
`;

const GradientO = styled(LinearGradient)`
  align-items: center;
  margin-left: 24px;
  margin-right: 24px;
  border-radius: 999px;
  padding: 2px;
`;

const GradientOV = styled(View)`
  align-items: center;
  width: 100%;
  padding: 16px;
  background-color: white;
  border-radius: 999px;
`;

const ButtonContainer = styled(TouchableOpacity)`
  width: 100%;
  padding-top: 4px;
  padding-bottom: 4px;
`;

const GradientText = (props: TextProps) => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={["#5c40ff", "#a221ff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text {...props} style={[props.style, { opacity: 0 }]} />
      </LinearGradient>
    </MaskedView>
  );
};

interface buttonStyle {
  color?: string;
}

const ButtonText = styled(Text)`
  color: ${(props: buttonStyle) => `${props.color}`};
  font-weight: 600;
  font-size: 18px;
`;

const ButtonGText = styled(GradientText)`
  color: ${(props: buttonStyle) => `${props.color}`};
  font-weight: 600;
  font-size: 18px;
`;

export const GradientButton = ({ children, onPress }: props) => {
  return (
    <ButtonContainer onPress={onPress}>
      <Gradient colors={["#5c40ff", "#a221ff"]} start={{ x: 0, y: 0 }}>
        <ButtonText color="white">{children}</ButtonText>
      </Gradient>
    </ButtonContainer>
  );
};

export const GradientOButton = ({ children, onPress }: props) => {
  return (
    <ButtonContainer onPress={onPress}>
      <GradientO colors={["#5c40ff", "#a221ff"]} start={{ x: 0, y: 0 }}>
        <GradientOV>
          <ButtonGText>{children}</ButtonGText>
        </GradientOV>
      </GradientO>
    </ButtonContainer>
  );
};
