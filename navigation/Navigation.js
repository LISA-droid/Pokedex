import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screen/Home";
import Pokedex from "../screen/Pokedex";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import PokemonDetail from "../screen/PokemonDetail.js";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function PokemonStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="PokemonScreen" component={Pokedex} options={{headerShown: false}}/>
            <Stack.Screen name="PokemonDetailScreen" component={PokemonDetail} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={PokemonStack} options={{tabBarIcon: ({}) => {
                    return <Icon name='home' size={30} color='blue'/>
                }}}/>
                {/* <Tab.Screen name="Pokemon" component={PokemonStack} options={{tabBarIcon: ({}) => {
                    return <Icon name='pokeball' size={30} color='blue'/>
                }}}/> */}
            </Tab.Navigator>
        </NavigationContainer>
    )
}