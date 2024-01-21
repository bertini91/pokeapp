import { Theme } from "@react-navigation/native";
export interface IPokemon {
  name: string;
  url: string;
}

interface Sprite {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface Entries {
  language: { name: string };
  flavor_text: string;
}
export interface Names {
  language: { name: string; url: string };
  name: string;
}

export interface IPokemonDetails {
  sprites: Sprite;
  stats: Stat[];
  types: Type[];
  flavor_text_entries?: Entries[];
  names?: Names;
}

export interface ITheme extends Theme {
  dark: boolean;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
    colorPH: string;
    colorBH: string;
    text2: string;
    text3: string;
    color1: string;
    color2: string;
    color3: string;
    color4: string;
    color5: string;
    colorIndex: string;
    backgroundHeader: string;
  };
}
