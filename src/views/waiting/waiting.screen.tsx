import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { Alert, SafeAreaView, Text, View } from "react-native";
import styled from "styled-components";
import { Audio } from "expo-av";

import { RootStackParams } from "../../../App";
import ProfileBubble from "../../components/profileBubble";
import { useAppSelector } from "../../hooks";
import initCall from "../../services";

const WaitingScreen = () => {
  const User = useAppSelector((state) => state.user);
  const [audio, setAudio] = useState<Audio.Sound | undefined>();

  const playAudio = async () => {
    console.log("Loading sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/audio/connecting.mp3"),
      { isLooping: true, shouldPlay: true }
    );
    setAudio(sound);
    console.log("Playing Sound");
  };

  useEffect(() => {
    return audio
      ? () => {
          console.log("Unloading Sound");
          audio.unloadAsync();
        }
      : undefined;
  }, [audio]);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      playAudio();
      initCall(0, 4000)
        .then(() => {
          navigation.replace("OnCall");
        })
        .catch((error) => {
          console.log(error);
          Alert.alert(
            "Connection Error",
            "Could not communitcate with the server",
            [
              {
                text: "OK",
                onPress: () => {
                  navigation.replace("Home");
                },
              },
            ]
          );
        });
      console.log("waiting screen");
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <MainContainer>
      <Container>
        <View>
          <ProfileBubble size={102} color="#0080f9" />
        </View>
        <StateTextContainer>
          <StateText>
            Connecting you to a{" "}
            {User.mode === "LISTENER" ? "sharer" : "listener"}...
          </StateText>
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
  position: relative;
  bottom: 80px;
  align-items: center;
  justify-content: center;
`;

const StateTextContainer = styled(View)`
  position: absolute;
  top: 130px;
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
