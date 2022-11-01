import { SafeAreaView, Text, View } from "react-native";
import React, { useEffect } from "react";
import styled from "styled-components";
import { MaterialCommunityIcons, Ionicons, Feather } from "@expo/vector-icons";

import ProfileBubble from "../../components/profileBubble";
import TitleBar from "../../components/titleBar";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../../App";
import { TouchableCircle } from "../../components/buttons";
import CallTimer from "./components/callTimer";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { action } from "../../redux";

const OnCallScreen = () => {
  const CallState = useAppSelector((state) => state.call);
  const dispatch = useAppDispatch();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      dispatch(action.call.setOnCall(true));
    });

    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  const handleEndCall = () => {
    dispatch(action.call.setOnCall(false));
    navigation.navigate("Lobby");
  };
  const handleMuteButton = () => {
    dispatch(action.call.ToggleIsMicMute());
  };
  const handleSpeakerButton = () => {
    dispatch(action.call.ToggleIsLoudSpeaker());
  };

  return (
    <>
      <MainContainer>
        <TitleBar />
        <Container>
          <UserName>Anonymous</UserName>
          <CallTimer />
        </Container>
        <BubbleContainer>
          <ProfileBubble size={80} color="#c2acfd" />
        </BubbleContainer>
      </MainContainer>

      <ControlContainer>
        <ButtonContainer>
          <TouchableCircle
            onPress={handleMuteButton}
            size={48}
            color={CallState.isMicMute ? "#868686" : "#d4d4d4"}
          >
            <MaterialCommunityIcons
              name="microphone-off"
              size={24}
              color="white"
            />
          </TouchableCircle>
          <TouchableCircle onPress={handleEndCall} size={58} color="#ff5151">
            <Feather name="phone" size={24} color="white" />
          </TouchableCircle>
          <TouchableCircle
            onPress={handleSpeakerButton}
            size={48}
            color={CallState.isLoudSpeaker ? "#868686" : "#d4d4d4"}
          >
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
