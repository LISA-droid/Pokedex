import { StatusBar } from 'expo-status-bar';
import {useState, useEffect } from "react";
import {View, FlatList, StyleSheet} from "react-native";
import { Pokemon } from '../Composents/Pokemon';
import { AsyncStorage } from 'react-native';

export default function Team(props) {
    const [listePoke, setListePoke] =  useState([]);
    const {navigation} = props

    useEffect(async () => {
        let team = []
        try {
            const value = await AsyncStorage.getItem('team');
            if (value !== null) {
                team = JSON.parse(value)
                setListePoke(team)
            }
        } catch (error) {
            // Error retrieving data
        }
    })

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
      />
    </View>
  );
}

const styles = StyleSheet.create({

})