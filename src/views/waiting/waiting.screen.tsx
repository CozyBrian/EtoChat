import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";
import styled from "styled-components";
import { RootStackParams } from "../../../App";
import ProfileBubble from "../../components/profileBubble";

const WaitingScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setTimeout(() => {
        navigation.navigate("OnCall");
      }, 1500);
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <MainContainer>
      <Container>
        <ProfileBubble size={102} color="#0080f9" />
        <StateTextContainer>
          <StateText>Connecting you to a listener...</StateText>
        </StateTextContainer>
      </Container>
    </MainContainer>
  );
};

const MainContainer = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Container = styled(View)`
  align-items: center;
  justify-content: center;
`;

const StateTextContainer = styled(View)`
  width: 60%;
`;
const StateText = styled(Text)`
  font-weight: 400;
  font-size: 26px;
  margin-top: 24px;
  margin-bottom: 24px;
  text-align: center;
`;

export default WaitingScreen;