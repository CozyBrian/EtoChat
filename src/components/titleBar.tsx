import { Text, View } from "react-native";
import React from "react";
import styled from "styled-components";

interface props {
  title?: string;
}

const TitleBar = ({ title }: props) => {
  return (
    <Container>
      <TitleText>{title}</TitleText>
    </Container>
  );
};

export default TitleBar;

const Container = styled(View)`
  height: 54px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const TitleText = styled(Text)`
  font-size: 20px;
`;
