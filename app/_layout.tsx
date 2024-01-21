import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import getPokemons from "../http";
import { usePokemonStore } from "../store/usePokemonStore";
import Header from "../components/Header";
import { MyDarkTheme, MyLigtTheme } from "../styles";
export default function BaseLayout() {
  const { setTotal, setNext, setPrevious, setPokemons } = usePokemonStore();
  const [useOnDark, setOnDark] = useState(true);

  useEffect(() => {
    const getData = async (params: any = null) => {
      try {
        const data = await getPokemons("pokemon");
        setTotal(data.count);
        setNext(data.next);
        setPokemons(data.results);
        setPrevious(data.previous);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);
  const handleTheme = (value: boolean) => {
    setOnDark(value);
  };

  return (
    <ThemeProvider value={useOnDark ? MyDarkTheme : MyLigtTheme}>
      <Stack
        screenOptions={{
          headerTitleStyle: {
            fontWeight: "bold",
            color: useOnDark
              ? MyDarkTheme.colors.color5
              : MyLigtTheme.colors.text3,
          },
          title: "Inicio",
          headerShown: true,
          animation: "slide_from_right",
          headerShadowVisible: false,
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerStyle: {
              backgroundColor: useOnDark
                ? MyDarkTheme.colors.primary
                : MyLigtTheme.colors.primary,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitle: () => (
              <Header useOnDark={useOnDark} handleTheme={handleTheme} />
            ),
          }}
        />
      </Stack>
      <Footer />
    </ThemeProvider>
  );
}
