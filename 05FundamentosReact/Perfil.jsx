import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Perfil(props) {
    console.log(props);
    return (
        <View>
            <Text>Nome: {props.nome}</Text>
            <Text>Idade: {props.idade}</Text>
            <Text>Escolaridade: {props.escolaridade}</Text>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create ({})