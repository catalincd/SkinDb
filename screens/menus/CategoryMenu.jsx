import React from 'react';
import { Button, Text, View, StyleSheet, FlatList} from 'react-native';
import Colors from '../../objects/colors';
import Map from '../../objects/map';
import Weapons from '../../objects/weapons';
import CategoryItem from '../../components/CategoryItem';

function CategoryMenu({route, navigation }) {

    const currentItems = Map.Items[route.params.origin];

    return (<View style={styles.container}>
                <FlatList 
                    numColumns={2}
                    data={currentItems}
                    renderItem={({ item, index, separators }) => (
                        <CategoryItem target='ItemGridMenu' json={getJson(item)} item={item}/>
                      )}
                    style={styles.list}
                />
            </View>);
}

function getJson(item){
    return Weapons[item.id][item.default];
}

const styles = StyleSheet.create({
    list:{
        margin: 10,
        
    },
    container:{ 
      flex: 1,
      alignItems: 'center', 
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: Colors.TabBackground,
    }
});
  
  
  
  export default CategoryMenu;