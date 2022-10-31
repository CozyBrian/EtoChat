import { Text, View } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";
import ProfileCard from "./ProfileCard";
import Memoji from "../../../assets/images/memojis";
import { useAppDispatch } from "../../../hooks";
import { action } from "../../../redux";

const ProfileSelector = () => {
  const [selected, setSelected] = useState(Memoji[0].id);
  const dispatch = useAppDispatch();

  const handleOnPress = (id: string) => {
    setSelected(id);
    dispatch(action.user.setProfile(id));
  };

  const dataSource = Memoji;
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
                  <ProfileCard
                    isSelected={selected === dataSource[i + j * 3].id}
                    key={`item-${i + j * 3}`}
                    src={dataSource[i + j * 3].src}
                    onPress={() => handleOnPress(dataSource[i + j * 3].id)}
                  />
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
