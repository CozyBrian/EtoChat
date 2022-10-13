import { SafeAreaView, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";
import ProfileSelector from "./components/profileSelector";
import ModeSelector from "./components/modeSelector";
import GradientButton from "../../components/buttons";

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

const HomeScreen = () => {
  const [text, setText] = useState("");

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
          <ProfileSelector />
        </View>
        <View style={{ paddingHorizontal: 20, paddingTop: 8 }}>
          <ModeSelector />
        </View>
      </View>
      <GradientButton>Find a listener</GradientButton>
    </MainContainer>
  );
};

export default HomeScreen;
