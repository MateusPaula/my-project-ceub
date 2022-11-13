import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Sobre({route}){
    const navigation = useNavigation();
    //Uso do params? com interrogação para caso dê problema e o parâmetro não seja enviado
    return (
        <View>
            <Text>Sobre</Text>
            <Text>Usuario Logado: {route.params?.nome}</Text> 
            <Text>Email: {route.params?.email}</Text>
            <Button title='Voltar' onPress={() => navigation.goBack()}/>
        </View>
    );
}