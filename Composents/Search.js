import { useEffect, useState } from 'react';
import { getStats } from '../Api/GetStats';
import { View, StyleSheet, Text, Image } from 'react-native';
import { TypeColor } from './TypeColor';

export function Pokemon(props) {
    const [statsPoke, setStatsPoke] = useState([]);
    const {poke, navigation} = props

    useEffect (async () => {
        await getStats(poke.url).then((res) => {
            setStatsPoke(res)
        })
    }, [])

    return (
        <Pressable style={styles.container} onPress={()=> {navigation.navigate('PokemonDetailScreen', {statsPoke: statsPoke, poke: poke})}}>
            <Text style={{fontSize: 11, color: '#cacaca'}}>N° {statsPoke.order}</Text>
            <Text style={styles.text}>{poke.name}</Text>
            {statsPoke.sprites ? 
            <Image style={styles.image} source={{uri : statsPoke.sprites.front_default}}/>
            : null}
            <View style={{flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'}}>
                {statsPoke.types ? 
                        statsPoke.types.map((type, index) => {
                            return <View key={index} style={{backgroundColor: TypeColor(type.type.name), width: 10, height: 10, borderRadius: 50, marginLeft:2, marginRight:2}}></View>
                        })
                : null }
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    image: {
      width: 100,
      height : 100
    },
    text: {
        textTransform: 'uppercase'
    },
    container: {
        backgroundColor: '#ffffff',
        width: '47%',
        margin: 5,
        padding: "1%",
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10
      },
  });
  