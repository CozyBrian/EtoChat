import { View } from "react-native";
import React from "react";
import styled from "styled-components";

const ProfileBubble = ({ size = 102, color = "#0080f9" }: StyleProps) => {
  const n = 50;

  return (
    <Circle size={size + n * 3} color={`${color}6d`}>
      <Circle size={size + n * 2} color={`${color}a4`}>
        <Circle size={size + n} color={`${color}d1`}>
          <Circle size={size} color={color} />
        </Circle>
      </Circle>
    </Circle>
  );
};

interface StyleProps {
  size: number;
  color: String;
}

export const Circle = styled(View)`
  background-color: ${({ color }: StyleProps) => `${color}`};
  align-items: center;
  justify-content: center;
  width: ${({ size = 20 }) => `${size}px`};
  height: ${({ size = 20 }) => `${size}px`};
  border-radius: 999px;
`;

export default ProfileBubble;
