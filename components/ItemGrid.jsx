import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, View} from 'react-native';
import Item from './Item'

const ItemGrid = props => {

    const target = 'ItemMenu';
    const renderItem = ({ item }) => <Item target={target} json={item} />;
    
    return <View style={styles.listContainer}>
                <FlatList columnWrapperStyle={styles.list}
                    keyExtractor={(item, index) => {return item["paintkitIdx"];}}
                    numColumns={2}
                    data={props.items}
                    renderItem={renderItem}  />
            </View>;
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        paddingTop: 20,
    },
    list:{
        width: '100%',
        margin: 10,
    }
});

export default ItemGrid; 