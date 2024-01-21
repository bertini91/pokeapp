import { View, Text, Switch, Button, Pressable, Platform } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { Entypo, Feather, Ionicons } from "@expo/vector-icons";

export default function Header({
  useOnDark,
  handleTheme,
}: {
  handleTheme: (value: boolean) => void;
  useOnDark: boolean;
}) {
  const theme = useTheme();
  const onTheme = (value: boolean) => {
    handleTheme(value);
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginRight: Platform.OS === "web" ? "80%" : "auto",
        }}
      >
        <Text
          style={{
            fontSize: 35,
            fontWeight: "800",
            color: theme.colors.colorPH,
            //color: 'green',
          }}
        >
          P
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "800", color: theme.colors.colorBH, }}>okémon!</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginRight: "30",
          justifyContent: "center",
          padding: 30,
        }}
      >
        <Pressable
          onPress={() => {
            onTheme(!useOnDark);
          }}
        >
          {() => {
            return useOnDark ? (
              <Feather
                name="sun"
                size={24}
                color="black"
              />
            ) : (
              <Ionicons
                name="cloudy-night"
                size={24}
                color="black"
              />
            );
          }}
        </Pressable>
      </View>
    </View>
  );
}
