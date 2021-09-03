import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight} from 'react-native';
import Colors from '../objects/colors';
import { useNavigation } from '@react-navigation/native';

const itemWidth = Dimensions.get('window').width * 0.75;

const MenuItem = (params) => {

    const navigation = useNavigation();
    const target = params.target;

    return (
        <TouchableHighlight style={styles.container} onPress={() => {navigation.navigate(target, {origin: params.title});}}>
            <Text style={styles.text}>{params.title}</Text>
        </TouchableHighlight>

    );
}

const styles = StyleSheet.create({
    container:{
        height: 30, 
        width: itemWidth,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white',
        marginVertical: 10,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.MenuItemBackground,
    },
    text:{
        color: 'white',
        fontSize: 30,
    }
});

export default MenuItem;