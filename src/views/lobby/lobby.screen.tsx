import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styled from "styled-components";
import { SafeAreaView } from "react-native-safe-area-context";
import { Circle } from "../../components/profileBubble";
import { GradientButton, GradientOButton } from "../../components/buttons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../../App";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Memoji from "../../assets/images/memojis";
import { action } from "../../redux";

const LobbyScreen = () => {
  const User = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const handleChangeMode = () => {
    dispatch(
      action.user.setMode(User.mode === "SHARER" ? "LISTENER" : "SHARER")
    );
  };

  const handleFind = () => {
    navigation.navigate("Waiting");
  };

  const handleLogOut = () => {
    navigation.navigate("Home");
  };

  const userImage = Memoji.find((item) => item.id === User.profileID);

  return (
    <MainContainer>
      <Container>
        <Circle size={138}>
          <MemojiImage source={userImage?.src} />
        </Circle>
        <UserName>{User.username}</UserName>
        <ModeText>{User.mode}</ModeText>
      </Container>
      <ButtonContainer>
        <GradientButton onPress={handleFind}>{`Find a ${
          User.mode === "LISTENER" ? "sharer" : "listener"
        }`}</GradientButton>
        <GradientOButton onPress={handleChangeMode}>
          {`Become a ${User.mode === "LISTENER" ? "sharer" : "listener"}`}
        </GradientOButton>
      </ButtonContainer>
      <Footer>
        <TouchableOpacity onPress={handleLogOut}>
          <FooterText>Logout</FooterText>
        </TouchableOpacity>
      </Footer>
    </MainContainer>
  );
};

const MainContainer = styled(SafeAreaView)`
  flex: 1;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #f6f6f6;
`;

const FooterText = styled(Text)`
  color: #f00;
`;

const Footer = styled(View)`
  position: absolute;
  align-items: center;
  justify-content: center;
  bottom: 32px;
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

const MemojiImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 999px;
`;

export default LobbyScreen;
