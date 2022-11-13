import React, {Component} from 'react';
import {View, TextInput, Button} from 'react-native';

export default class Screen1 extends Component
{
    render()
    {
        return(
            <View style={{flex:1, padding: 10, justifyContent:'center'}}>
                <TextInput
                    placeholder='Coloque seu usuário'
                    style={{borderBottomWidth: 1, borderBottomColor: '#ff0000', marginBottom: 20}}
                />

                <Button
                    title='Login'
                ></Button>
            </View>
        );
    }
}