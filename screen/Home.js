import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { getPokemon } from '../Api/PokeApi';
import { Pokemon } from '../Composents/Pokemon';

export default function Home(props) {
  const [listePoke, setListePoke] = useState([]);
  const [nextPage, setNextPage] = useState("https://pokeapi.co/api/v2/pokemon")
  const {navigation} = props

  useEffect( async () => {
    await getPokemon().then((res) => {
      setListePoke(res.results)
      loadPokemon(nextPage)
    })
  }, [])

  const loadPokemon = (url) => {
    getPokemon(url).then(datas => {
      setListePoke([...listePoke, ...datas.results])
      setNextPage(datas.next)
    })
  }


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
          contentContainerStyle={{ alignItems: "center" }}
          horizontal={false}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          data={listePoke}
          extraData={listePoke}
          renderItem={({item, index})=><Pokemon poke={item} index={index} navigation={navigation}/>}
          keyExtractor={(item) => item.name}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            loadPokemon(nextPage)
          }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '100%'
  }
});
