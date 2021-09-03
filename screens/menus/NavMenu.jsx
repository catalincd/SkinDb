import React from 'react';
import { Button, Text, View, StyleSheet, FlatList} from 'react-native';
import Colors from '../../objects/colors';
import MenuItem from '../../components/MenuItem';
import Map from '../../objects/map';





function NavMenu({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={Map.Entries}
        renderItem={({ item, index, separators }) => (
          <MenuItem target='CategoryMenu' title={item.title}/>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ 
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: Colors.TabBackground,
  }
});



export default NavMenu;