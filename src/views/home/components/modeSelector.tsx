import { Pressable, Text, View } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";
import { useAppDispatch } from "../../../hooks";
import { action } from "../../../redux";

const ModeSelector = () => {
  const [selected, setSelected] = useState("SHARER");
  const dispatch = useAppDispatch();

  const options: {
    id: "SHARER" | "LISTENER";
    title: string;
  }[] = [
    { id: "SHARER", title: "Sharer" },
    { id: "LISTENER", title: "Listener" },
  ];

  const handlePress = (id: "SHARER" | "LISTENER") => {
    setSelected(id);
    dispatch(action.user.setMode(id));
  };

  return (
    <>
      <Label>Join as</Label>
      {options.map((item) => (
        <RadioContainer key={item.id} onPress={() => handlePress(item.id)}>
          <CircleIndicator isSelected={item.id === selected} />
          <RadioText>{item.title}</RadioText>
        </RadioContainer>
      ))}
    </>
  );
};

const CircleIndicator = ({ isSelected = false }) => {
  if (isSelected) {
    return (
      <SelectedCircle colors={["#5c40ff", "#a221ff"]} start={{ x: 0, y: 0 }}>
        <WhiteCircle>
          <SelectedInnerCircle
            colors={["#5c40ff", "#a221ff"]}
            start={{ x: 0, y: 0 }}
          />
        </WhiteCircle>
      </SelectedCircle>
    );
  } else {
    return <UnSelectedCircle />;
  }
};

const Label = styled(Text)`
  font-size: 16px;
  padding-top: 8px;
  padding-bottom: 12px;
  font-weight: 500;
`;

const RadioContainer = styled(Pressable)`
  flex-direction: row;
  align-items: center;
  margin-bottom: 4px;
`;
const UnSelectedCircle = styled(View)`
  height: 14px;
  width: 14px;
  border: 1px solid black;
  border-radius: 999px;
  margin-right: 4px;
`;

const SelectedCircle = styled(LinearGradient)`
  justify-content: center;
  align-items: center;
  height: 14px;
  width: 14px;
  border-radius: 999px;
  margin-right: 4px;
  padding: 1px;
`;

const WhiteCircle = styled(View)`
  background-color: white;
  border-radius: 999px;
  width: 100%;
  height: 100%;
  padding: 1px;
`;

const SelectedInnerCircle = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  border-radius: 999px;
`;

const RadioText = styled(Text)`
  font-size: 16px;
  color: #919191;
`;

export default ModeSelector;
