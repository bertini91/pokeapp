import { View, Text } from "react-native";
import React from "react";
import { useTheme } from '@react-navigation/native';

export default function Footer() {
  const theme = useTheme();

  return (
    <View style={{ backgroundColor: theme.colors.primary }}>
      <Text style={{ textAlign: "center" }}>Coded by {"<Nico Bertini ;)/>"} - 2024</Text>
    </View>
  );
}
