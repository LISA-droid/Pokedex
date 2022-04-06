import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { TypeColor } from "../Composents/TypeColor";
import { StatColor } from "../Composents/StatColor";
import ProgressBar from 'react-native-progress/Bar';

export default function PokemonDescription(props) {
    const statsPoke = props.route.params.statsPoke
    const poke = props.route.params.poke

    return (
        <ScrollView style={{flex: 1}} contentContainerStyle={{alignItems: 'center'}}>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri : statsPoke.sprites.front_default}}
                />
                <View style={{borderBottomColor: '#d1d1d1', borderBottomWidth: 1, width: '100%', paddingBottom: 10}}>
                    <Text style={styles.name}>{poke.name}</Text>
                    <Text>Number : {statsPoke.order}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%', paddingTop: 10, paddingBottom: 15}}>
                    <View>
                        <Text style={{textAlign: 'center', fontSize: 18, marginBottom: 10}}>Height :</Text>
                        <Text style={{textAlign: 'center'}}>{statsPoke.height} dm</Text>
                    </View>
                    <View>
                        <Text style={{textAlign: 'center', fontSize: 18, marginBottom: 10}}>Weight :</Text>
                        <Text style={{textAlign: 'center'}}>{statsPoke.weight} hg</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'}}>
                {
                    statsPoke.types.map((type, index) => {
                        return <View key={index} style={[ styles.type, {backgroundColor: TypeColor(type.type.name)}]}><Text style={{color: "white", textAlign:"center", textTransform: "capitalize"}}>{type.type.name}</Text></View>
                    })
                }
                </View>


                <View style={{marginTop: 20}}><Text style={{fontSize: 20}}>Abilities :</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'}}>
                    {       
                        statsPoke.abilities.map((ability, index) => {
                            return <View key={index} style={[ styles.type, {backgroundColor: '#cacaca'}]}><Text style={{color: "white", textAlign:"center", textTransform: "capitalize"}}>{ability.ability.name}</Text></View>
                        })
                    }
                    </View>
                </View>


                <View style={{marginTop: 20}}>
                    <Text style={{fontSize: 20}}>Base stats :</Text>
                    <View style={{alignItems: "flex-start", flexDirection: "row", width:'100%', marginTop: 5, flexWrap: "wrap"}}>
                        {
                            statsPoke.stats.map((stat, index) => {
                                return(
                                    <View key={index} style={{display:"flex", flexDirection: "column", alignItems:"stretch", width: "80%", marginBottom:10}}>
                                        <Text style={{color: "black", textTransform: "uppercase",}}>{stat.stat.name} :</Text>
                                        <ProgressBar progress={stat.base_stat/100} width={null} height={14} color={StatColor(stat.stat.name)}/>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
            </View>
        </ScrollView>
    )
} 

const styles = StyleSheet.create({
    image: {
        width: 200,
        height : 200,
        alignSelf: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        paddingLeft: 15,
        paddingRight: 15
    },
    name: {
        textTransform: 'capitalize',
        fontSize: 30
    },
    type: {
        borderRadius: 10,
        paddingBottom: 10,
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 10,
        fontSize: 18,
        marginTop: 15,
        width: 110,
        textAlign:"center",
        marginLeft: 5,
        marginRight: 5
    }
  });
  