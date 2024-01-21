import { View, StyleSheet, Platform, Image } from "react-native";
import { SvgUri } from "react-native-svg";
import React, { FC } from "react";

interface IPostImage {
  uri: string;
  height?: number;
  width?: number;
  format?: string;
}
// Esto es algo que no sabia, Image de react-native, no permite svg
const PostImage: FC<IPostImage> = ({
  uri,
  height = 100,
  width = 100,
  format = "png",
}) => {
  return Platform.OS === "web" || format !== "svg" ? (
    <Image
      source={{
        uri: uri || "no-image.svg",
      }}
      style={{ ...styles.img, height, width }}
    />
  ) : (
    <View style={{ ...styles.img, height, width }}>
      <SvgUri uri={uri} height={height} width={width} />
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    /*     height: 100,
    width: 100, */
    borderRadius: 10,
    marginTop: 10,
    //marginEnd: 10,
  },
});

export default PostImage;
