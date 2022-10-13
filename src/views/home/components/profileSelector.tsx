import { Pressable, Text, View } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";

interface props {
  set: React.Dispatch<React.SetStateAction<string>>;
}

const ProfileSelector = ({ set }: props) => {
  const [selected, setSelected] = useState("A");

  const handleOnPress = (id: string) => {
    setSelected(id);
    set(id);
  };

  const dataSource = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  return (
    <>
      <Label>Select an anonymous profile picture</Label>
      <View style={{ justifyContent: "center" }}>
        {Array(3)
          .fill("")
          .map((__, i) => (
            <GridRowContainer key={i}>
              {Array(3)
                .fill("")
                .map((_, j) => (
                  <ItemContainer
                    onPress={() => handleOnPress(dataSource[i + j * 3])}
                    isSelected={selected === dataSource[i + j * 3]}
                    key={`item-${i + j * 3}`}
                  >
                    <Text>{dataSource[i + j * 3]}</Text>
                  </ItemContainer>
                ))}
            </GridRowContainer>
          ))}
      </View>
    </>
  );
};

export default ProfileSelector;

const Label = styled(Text)`
  font-size: 16px;
  padding-top: 18px;
  padding-bottom: 18px;
  font-weight: 500;
`;

const GridRowContainer = styled(View)`
  flex-direction: row;
  justify-content: center;
`;

interface styleprop {
  isSelected?: boolean;
}

const ItemContainer = styled(Pressable)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 6px;
  background-color: #207dcf;
  border-radius: 14px;
  border: ${({ isSelected }: styleprop) =>
    isSelected ? "2px solid black" : "none"};
  height: 102px;
  width: 102px;
  /* transition: ease-in-out;
  animation-duration: 300ms; */
`;
