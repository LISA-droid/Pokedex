import {useState, useCallback } from "react";
import {View, Text, TextInput, Keyboard, Image, Dimensions, StyleSheet} from "react-native";
import { getPokemon } from '../Api/PokeApi';
import { useFocusEffect } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Pokemon } from '../Composents/Pokemon';

export default function Search(props) {
    const [search, onChangeSearch] = useState("");
    const [pokemon, setPokemon] = useState(null);
    const {navigation} = props;
  
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
            const item = {
              name: response.name,
              url: "https://pokeapi.co/api/v2/pokemon/" + response.id,
            };
            setPokemon(item);
            onChangeSearch("");
        });
        Keyboard.dismiss();
      }
    }
  

    return(
        <View>
          <View style={styles.container}>
            <TextInput
                onChangeText={onChangeSearch}
                value={search}
                style={styles.input}
            />
            <Icon
                name="magnify"
                size={30}
                color='grey'
                onPress={() => getPokemonSearch()}
            />
          </View>
          {pokemon !== null ? (
          <View style={styles.card}>
            <Pokemon poke={pokemon} navigation={navigation}/>
          </View>
        ) : (
          <View style={styles.error}>
            <Text style={styles.errorText}>Nothing found</Text>
            <Icon
                name="pokeball"
                size={30}
                color='black'
                onPress={() => getPokemonSearch()}
            />
          </View>
        )}
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
    width: '80%'
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },  
  error: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: 'black',
    fontSize: 30,
  },
})