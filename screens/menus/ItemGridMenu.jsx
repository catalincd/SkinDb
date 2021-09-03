import React from 'react';
import { Button, Text, View, StyleSheet, FlatList} from 'react-native';
import Colors from '../../objects/colors';
import Weapons from '../../objects/weapons';
import ItemGrid from '../../components/ItemGrid';

function ItemGridMenu({route, navigation }) {

    //route.params.id
    var keys = Object.keys(Weapons[route.params.id]);
    var items = [];
    for(var i=0;i<keys.length;i++){
        items = [...items, Weapons[route.params.id][keys[i]]];
    }

    items.sort(function(a,b){
        return a.rarity < b.rarity;
    });

    return (<View style={styles.container}>
               <ItemGrid items={items}/> 
            </View>);
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.Background,
    }
});

export default ItemGridMenu;