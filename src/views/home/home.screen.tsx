import { SafeAreaView, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";
import ProfileSelector from "./components/profileSelector";
import ModeSelector from "./components/modeSelector";
import GradientButton from "../../components/buttons";

const HomeScreen = () => {
  const [text, setText] = useState("");
  const [profile, setProfile] = useState("A");
  const [mode, setMode] = useState("S");

  const handleSubmit = () => {
    const data = {
      text,
      profile,
      mode,
    };

    console.log(data);
  };

  return (
    <MainContainer>
      <View style={{ width: "100%" }}>
        <View style={{ paddingHorizontal: 20, paddingTop: 48 }}>
          <Label>
            Enter a nickname{" "}
            <Text style={{ color: "#bfbfbf" }}>(optional)</Text>
          </Label>
          <TextBox
            placeholder="Type here to translate!"
            onChangeText={(newText) => setText(newText)}
            defaultValue={text}
          />
        </View>
        <View style={{ paddingHorizontal: 20, paddingTop: 8 }}>
          <ProfileSelector set={setProfile} />
        </View>
        <View style={{ paddingHorizontal: 20, paddingTop: 8 }}>
          <ModeSelector set={setMode} />
        </View>
      </View>
      <GradientButton onPress={handleSubmit}>
        {`Find a ${mode === "L" ? "sharer" : "listener"}`}
      </GradientButton>
    </MainContainer>
  );
};

const MainContainer = styled(SafeAreaView)`
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;
const Label = styled(Text)`
  font-size: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-weight: 500;
`;

const TextBox = styled(TextInput)`
  height: 48px;
  padding-left: 12px;
  font-size: 18px;
  border: 2px solid #e7e7e7;
  border-radius: 12px;
`;

export default HomeScreen;
