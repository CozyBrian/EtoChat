import React, { useEffect } from "react";
import styled from "styled-components";
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { View } from "react-native";

const ProfileBubble = ({ size = 102, color = "#0080f9" }: StyleProps) => {
  const n = 50;
  return (
    <Container>
      <AnimatedCircle delay={0} size={size + n * 3} color={`${color}6d`} />
      <AnimatedCircle delay={150} size={size + n * 2} color={`${color}a4`} />
      <AnimatedCircle delay={300} size={size + n} color={`${color}d1`} />
      <AnimatedCircle delay={450} size={size} color={`${color}`} />
    </Container>
  );
};

type AnimatedCircleProps = {
  delay: number;
  size: number;
  color: string;
};

const AnimatedCircle = ({
  delay = 100,
  size = 102,
  color = "#0080f9",
}: AnimatedCircleProps) => {
  const scaleValue = useSharedValue(0.9);

  const config = {
    duration: 300,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  useEffect(() => {
    scaleValue.value = withDelay(
      delay,
      withRepeat(withTiming(1.05, { duration: 300 }), -1, true)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const style = useAnimatedStyle(() => {
    return {
      scale: withTiming(scaleValue.value, config),
      transform: [{ scale: interpolate(scaleValue.value, [0, 1], [0.9, 1.1]) }],
    };
  });

  return <ACircle style={style} size={size} color={color} />;
};

interface StyleProps {
  size: number;
  color: String;
  delay?: number;
}

export const Circle = styled(Animated.View)`
  background-color: ${({ color }: StyleProps) => `${color}`};
  align-items: center;
  justify-content: center;
  width: ${({ size = 20 }) => `${size}px`};
  height: ${({ size = 20 }) => `${size}px`};
  border-radius: 999px;
`;

const ACircle = styled(Animated.View)`
  position: absolute;
  background-color: ${({ color }: StyleProps) => `${color}`};
  align-items: center;
  justify-content: center;
  width: ${({ size = 20 }) => `${size}px`};
  height: ${({ size = 20 }) => `${size}px`};
  border-radius: 999px;
`;

const Container = styled(View)`
  align-items: center;
  justify-content: center;
`;

export default ProfileBubble;
