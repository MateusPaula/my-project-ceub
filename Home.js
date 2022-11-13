import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Home(){
    const navigation = useNavigation();

    function irSobre(){
        navigation.navigate("Sobre", {nome: "Mateus", email: "mateus.paula@sempreceub.com", id: 1}); // navigate(rota, parametros)
    }

    return (
        <View>
            <Text>Home</Text>
            <Button title='Ir para Sobre' onPress={irSobre}/>
        </View>
    );
}