import React from 'react';
import { Button, Text, View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../objects/colors';
import NavMenu from './menus/NavMenu';
import CategoryMenu from './menus/CategoryMenu';
import ItemGridMenu from './menus/ItemGridMenu';
import ItemMenu from './menus/ItemMenu';

function ItemDetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push('ItemDetails')}
        />
        <Button title="Go to Home" onPress={() => navigation.navigate('Menu')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}
        />
    </View>
  );
}

const Stack = createStackNavigator();


class ItemsScreen extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator 
                        initialRouteName="Menu" 
                        screenOptions={{
                            headerTintColor: 'white',
                            headerStyle: { backgroundColor: Colors.HeaderBackground },
                        }}
                >
                    <Stack.Screen options={{title:"Category"}} name="Menu" component={NavMenu} />
                    <Stack.Screen options={({ route }) => ({ title: route.params.origin })} name="CategoryMenu" component={CategoryMenu} />
                    <Stack.Screen options={({ route }) => ({ title: route.params.origin })} name="ItemGridMenu" component={ItemGridMenu} />
                    <Stack.Screen options={({ route }) => ({ title: route.params.origin })} name="ItemMenu" component={ItemMenu} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}


const styles = StyleSheet.create({
    headerx:{
        backgroundColor: Colors.Background,
    },

    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.Background,
    }
});

export default ItemsScreen;
