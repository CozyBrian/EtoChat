import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, ImageSourcePropType, Pressable, View } from "react-native";
import styled from "styled-components";

type profileCardProps = {
  isSelected: boolean;
  src: ImageSourcePropType;
  onPress: () => void;
};

const ProfileCard = ({
  isSelected = false,
  src,
  onPress,
}: profileCardProps) => {
  return (
    <ProfileContainer onPress={onPress}>
      {isSelected && (
        <Selected colors={["#5c40ff", "#a221ff"]} start={{ x: 0, y: 0 }} />
      )}
      <Card>
        <MemojiImage source={src} />
      </Card>
    </ProfileContainer>
  );
};

const Card = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  height: 100%;
  width: 100%;
`;

const ProfileContainer = styled(Pressable)`
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  margin: 6px;
  height: 102px;
  width: 102px;
`;

const Selected = styled(LinearGradient)`
  position: absolute;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  height: 104px;
  width: 104px;
`;

const MemojiImage = styled(Image)`
  height: 99%;
  width: 99%;
  border-radius: 12px;
`;

export default ProfileCard;
