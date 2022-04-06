import {useState, useCallback } from "react";
import {View, Text, TextInput, Keyboard, Image, Dimensions, StyleSheet} from "react-native";
import { getPokemon } from '../Api/PokeApi';
import { useFocusEffect } from "@react-navigation/native";

export default function Search() {
    const [search, onChangeSearch] = useState("");
    const [pokemon, setPokemon] = useState(null);
  
    useFocusEffect(
      useCallback(() => {
        setPokemon(null);
      }, [])
    );
  
    function getPokemonSearch() {
      if (search !== "") {
        getPokemon(
          "https://pokeapi.co/api/v2/pokemon/" + search.toLowerCase().trimEnd()
        ).then((response) => {
          if (response && response.status === 200) {
            const item = {
              name: response.data.name,
              url: "https://pokeapi.co/api/v2/pokemon/" + response.data.id,
            };
            setPokemon(item);
            onChangeSearch("");
          } else {
            setPokemon(null);
          }
        });
        Keyboard.dismiss();
      }
    }
  

    return(
        <View>
            <TextInput
                onChangeText={onChangeSearch}
                value={search}
                style={styles.input}
            />
        </View>
    )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#ffffff',
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#d1d1d1',
    padding: 10,
  },
})