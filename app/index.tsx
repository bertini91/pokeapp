import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { usePokemonStore } from "../store/usePokemonStore";
import { useRef } from "react";
import { IPokemon } from "../interfaces";
import { router } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import PostImage from "../components/PostImage";
import getPokemons, { base_url } from "../http";
import { useTheme } from "@react-navigation/native";

export default function Page() {
  const {
    pokemons,
    next,
    previous,
    setTotal,
    setNext,
    setPrevious,
    setPokemons,
  } = usePokemonStore();
  const URL_PINK =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world";
  const refSV = useRef<ScrollView>(null);
  const handlePress = (element: IPokemon) => {
    router.push({
      pathname: `/pokemonDetail/${element.name}`,
      params: {
        name: element.name,
        url: element.url,
        uri: `${URL_PINK}/${element.url.split("/").reverse()[1]}.svg`,
      },
    });
  };
  const getData = async (params: any = null) => {
    try {
      const data = await getPokemons(params);
      setTotal(data.count);
      setNext(data.next);
      setPokemons(data.results);
      setPrevious(data.previous);
      refSV.current?.scrollTo({ x: 0, y: 0, animated: true });
    } catch (error) {
      console.error(error);
    }
  };
  const nextPage = async () => {
    // Puede ser que sea la ultima pagina
    if (next) {
      await getData(next?.split(`${base_url}/`)[1]);
    }
  };
  const prevPage = async () => {
    // Puede ser que sea la primera pagina
    if (previous) {
      await getData(previous?.split(`${base_url}/`)[1]);
    }
  };
  const theme = useTheme();

  return (
    <SafeAreaView style={{ ...styles.container }}>
      <ScrollView style={styles.scrollView} ref={refSV}>
        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            columnGap: 12,
            justifyContent: "space-around",
          }}
        >
          {pokemons?.map((element) => (
            <TouchableOpacity
              key={element.name}
              onPress={() => handlePress(element)}
              style={{ height: 150, width: "40%", zIndex: 10 }}
            >
              <PostImage
                uri={
                  `${URL_PINK}/${element.url.split("/").reverse()[1]}.svg` ||
                  "/no-image.png"
                }
                format="svg"
              />
              <Text
                style={{
                  color: theme.colors.text,
                  fontSize: 20,
                  padding: 15,
                  fontWeight: "500",
                }}
              >
                {element.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.indexPage}>
          <Pressable onPress={prevPage}>
            {({ pressed }) => (
              <AntDesign
                name="stepbackward"
                size={25}
                color={theme.colors.colorIndex}
                style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
              />
            )}
          </Pressable>
          <Pressable onPress={nextPage}>
            {({ pressed }) => (
              <AntDesign
                name="stepforward"
                size={25}
                color={theme.colors.colorIndex}
                style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
              />
            )}
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  scrollView: {
    flex: 1,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  indexPage: {
    flexWrap: "wrap",
    flexDirection: "row",
    columnGap: 10,
    justifyContent: "center",
    marginVertical: 20,
  },
});
