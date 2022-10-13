import { Pressable, Text, View } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";

const ModeSelector = () => {
  const [selected, setSelected] = useState("S");

  const options = [
    { id: "S", title: "Sharer" },
    { id: "L", title: "Listener" },
  ];

  const handlePress = (id: string) => {
    setSelected(id);
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
      <SelectedCircle>
        <SelectedInnerCircle />
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

const SelectedCircle = styled(View)`
  justify-content: center;
  align-items: center;
  height: 14px;
  width: 14px;
  border: 1px solid #2b92ff;
  border-radius: 999px;
  margin-right: 4px;
  padding: 1px;
`;
const SelectedInnerCircle = styled(View)`
  width: 100%;
  height: 100%;
  background-color: #2b92ff;
  border-radius: 999px;
`;
const RadioText = styled(Text)`
  font-size: 16px;
  color: #919191;
`;

export default ModeSelector;
