import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import PostImage from "../../components/PostImage";
import getPokemons from "../../http";
import { Entries, ITheme } from "../../interfaces";
import { usePokemonStore } from "../../store/usePokemonStore";
import { useTheme, Theme } from "@react-navigation/native";

export default function PokemonDetail() {
  const { name, url, uri = "" } = useLocalSearchParams();
  const theme: ITheme | Theme = useTheme();
  const { setPokemonDetail, pokemonDetail } = usePokemonStore();
  const removeRepeats = (entries: Entries[]): Entries[] => {
    const flavorTextSet = new Set<string>();
    return entries.filter((item) => {
      if (!flavorTextSet.has(item.flavor_text)) {
        flavorTextSet.add(item.flavor_text);
        return true;
      }
      return false;
    });
  };
  useEffect(() => {
    //resetPokemonDetail();
    const loadData = async () => {
      const pokemon = await getPokemons(
        `pokemon/${url?.split("/").reverse()[1]}`
      );
      const description = await getPokemons(
        `ability/${url?.split("/").reverse()[1]}`
      );
      const entries = description.flavor_text_entries?.filter(
        (pok: { language: { name: string } }) => pok.language.name === "es"
      );
      // Vienen muchas entries repetidas
      pokemon.flavor_text_entries = removeRepeats(entries);
      pokemon.names = description.names?.filter(
        (pok: { language: { name: string } }) => pok.language.name === "es"
      )[0];

      pokemon && setPokemonDetail(pokemon);
    };
    loadData();
  }, []);
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text
        style={{
          color: theme.dark ? theme.colors.color5 : theme.colors.color2,
          fontWeight: "800",
          fontSize: 30,
          marginTop: 10,
          marginBottom: 20,
        }}
      >{`Pokemon ${name}`}</Text>
      <PostImage uri={uri.toString()} height={300} width={300} format="svg" />
      {pokemonDetail && (
        <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
          <PostImage
            uri={pokemonDetail?.sprites?.front_default || ""}
            width={80}
            height={80}
          />
          <PostImage
            uri={pokemonDetail?.sprites?.back_default || ""}
            width={80}
            height={80}
          />
          <PostImage
            uri={pokemonDetail?.sprites?.front_shiny || ""}
            width={80}
            height={80}
          />
          <PostImage
            uri={pokemonDetail?.sprites?.back_shiny || ""}
            width={80}
            height={80}
          />
        </View>
      )}
      <Text
        style={{
          color: theme.colors.text,
          fontSize: 20,
          fontWeight: "700",
          marginBottom: 20,
        }}
      >
        Descripción{" "}
      </Text>
      <View>
        {pokemonDetail?.names?.name && (
          <Text
            style={{
              color: theme.colors.text,
              fontWeight: "600",
              marginBottom: 10,
            }}
          >
            Nombre: {pokemonDetail?.names?.name}
          </Text>
        )}
        {pokemonDetail?.flavor_text_entries && (
          <View style={{ marginBottom: 20 }}>
            <Text
              style={{
                color: theme.colors.text,
                fontWeight: "600",
                marginBottom: 5,
              }}
            >
              Habilidades:{" "}
            </Text>
            <View>
              {pokemonDetail?.flavor_text_entries.map((entrie, index) => (
                <Text
                  key={`entri_${index}`}
                  style={{ color: theme.colors.text, paddingLeft: 5 }}
                >
                  * {entrie.flavor_text}
                </Text>
              ))}
            </View>
          </View>
        )}
      </View>
    </View>
  );
}
