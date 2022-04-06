import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screen/Home";
import Parameters from "../screen/Parameters";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import PokemonDetail from "../screen/PokemonDetail";
import Search from "../screen/Search";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function PokemonStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="PokemonDetailScreen" component={PokemonDetail} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={PokemonStack} options={{tabBarIcon: ({}) => {
                    return <Icon name='home' size={30} color='#d1d1d1'/>
                }}}/>
                <Tab.Screen name="Search" component={Search} options={{tabBarIcon: ({}) => {
                    return <Icon name='magnify' size={30} color='#d1d1d1'/>
                }}}/>
                <Tab.Screen name="Settings" component={Parameters} options={{tabBarIcon: ({}) => {
                    return <Icon name='cog' size={30} color='#d1d1d1'/>
                }}}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}