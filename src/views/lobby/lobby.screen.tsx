import { Text, View } from "react-native";
import React from "react";
import styled from "styled-components";
import { SafeAreaView } from "react-native-safe-area-context";
import { Circle } from "../../components/profileBubble";
import { GradientButton, GradientOButton } from "../../components/buttons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../../App";

const LobbyScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const handleOnPress = () => {
    navigation.navigate("Waiting");
  };
  return (
    <MainContainer>
      <Container>
        <Circle size={138} color="#ff9797" />
        <UserName>Brian Newton</UserName>
        <ModeText>Listener</ModeText>
      </Container>
      <ButtonContainer>
        <GradientButton onPress={handleOnPress}>Find a sharer</GradientButton>
        <GradientOButton onPress={handleOnPress}>
          Become a sharer
        </GradientOButton>
      </ButtonContainer>
    </MainContainer>
  );
};

const MainContainer = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #f6f6f6;
`;

const Container = styled(View)`
  align-items: center;
  justify-content: center;
`;
const ButtonContainer = styled(View)`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
`;

const UserName = styled(Text)`
  font-size: 22px;
  font-weight: 500;
  margin-top: 8px;
  margin-bottom: 2px;
`;
const ModeText = styled(Text)`
  font-size: 12px;
  font-weight: 500;
  color: #6c6c6c;
`;

export default LobbyScreen;
