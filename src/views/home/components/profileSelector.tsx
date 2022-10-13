import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styled from "styled-components";

const Label = styled(Text)`
  font-size: 16px;
  padding-top: 18px;
  padding-bottom: 18px;
  font-weight: 500;
`;

const ProfileSelector = () => {
  // const dataSource = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  return (
    <>
      <Label>Select an anonymous profile picture</Label>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <View style={styles.imageThumbnail}>
            <Text>A</Text>
          </View>
          <View style={styles.imageThumbnail}>
            <Text>A</Text>
          </View>
          <View style={styles.imageThumbnail}>
            <Text>A</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <View style={styles.imageThumbnail}>
            <Text>A</Text>
          </View>
          <View style={styles.imageThumbnail}>
            <Text>A</Text>
          </View>
          <View style={styles.imageThumbnail}>
            <Text>A</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <View style={styles.imageThumbnail}>
            <Text>A</Text>
          </View>
          <View style={styles.imageThumbnail}>
            <Text>A</Text>
          </View>
          <View style={styles.imageThumbnail}>
            <Text>A</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default ProfileSelector;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  imageThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    margin: 6,
    backgroundColor: "#207dcf",
    borderRadius: 14,
    height: 100,
    width: 100,
  },
});
