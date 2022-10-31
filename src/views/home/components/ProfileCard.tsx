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
  if (isSelected) {
    return (
      <Selected colors={["#5c40ff", "#a221ff"]} start={{ x: 0, y: 0 }}>
        <Card>
          <MemojiImage source={src} />
        </Card>
      </Selected>
    );
  } else {
    return (
      <UnSelected onPress={onPress}>
        <Card>
          <MemojiImage source={src} />
        </Card>
      </UnSelected>
    );
  }
};

const Card = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  height: 100%;
  width: 100%;
`;

const Selected = styled(LinearGradient)`
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  margin: 6px;
  height: 102px;
  width: 102px;
  padding: 2px;
`;

const UnSelected = styled(Pressable)`
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  margin: 6px;
  height: 102px;
  width: 102px;
  padding: 1px;
`;

const MemojiImage = styled(Image)`
  height: 99%;
  width: 99%;
  border-radius: 12px;
`;

export default ProfileCard;
