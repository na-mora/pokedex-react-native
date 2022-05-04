import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { PokemonScreen } from '../screens/PokemonScreen';
import { PokemonSimple } from '../interfaces/pokemonInterface';

// Argumentos que reciben las pantallas
export type RootStackParams = {
    HomeScreen: undefined,
    PokemonScreen: {pokemon: PokemonSimple, color: string}
}

const Stack = createStackNavigator<RootStackParams>();

function MyStack(){
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: 'white',
            },
        }}>
            <Stack.Screen name = "HomeScreen" component={HomeScreen}/>
            <Stack.Screen name = "PokemonScreen" component={PokemonScreen}/>
        </Stack.Navigator>
    );
}

export default MyStack;
