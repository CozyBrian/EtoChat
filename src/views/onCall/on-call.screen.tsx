import { SafeAreaView, Text, View } from "react-native";
import React from "react";
import styled from "styled-components";
import { MaterialCommunityIcons, Ionicons, Feather } from "@expo/vector-icons";

import ProfileBubble from "../../components/profileBubble";
import TitleBar from "../../components/titleBar";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../../App";
import { TouchableCircle } from "../../components/buttons";

const OnCallScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const handleOnPress = () => {
    navigation.navigate("Lobby");
  };

  return (
    <>
      <MainContainer>
        <TitleBar />
        <Container>
          <UserName>Anonymous</UserName>
          <CallTimeText>0:01</CallTimeText>
        </Container>
        <BubbleContainer>
          <ProfileBubble size={80} color="#c2acfd" />
        </BubbleContainer>
      </MainContainer>

      <ControlContainer>
        <ButtonContainer>
          <TouchableCircle size={48} color="#868686">
            <MaterialCommunityIcons
              name="microphone-off"
              size={24}
              color="white"
            />
          </TouchableCircle>
          <TouchableCircle onPress={handleOnPress} size={58} color="#ff5151">
            <Feather name="phone" size={24} color="white" />
          </TouchableCircle>
          <TouchableCircle size={48} color="#868686">
            <Ionicons name="md-volume-high-outline" size={24} color="white" />
          </TouchableCircle>
        </ButtonContainer>
      </ControlContainer>
    </>
  );
};

const UserName = styled(Text)`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #444444;
`;
const CallTimeText = styled(Text)`
  font-size: 18px;
  font-weight: 500;
  color: #6c6c6c;
`;

const MainContainer = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  background-color: #f6f6f6;
`;

const ControlContainer = styled(SafeAreaView)`
  flex-direction: row;
  height: 142px;
  align-items: center;
  justify-content: center;
`;
const ButtonContainer = styled(View)`
  flex-direction: row;
  width: 50%;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled(View)`
  align-items: center;
`;
const BubbleContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default OnCallScreen;
