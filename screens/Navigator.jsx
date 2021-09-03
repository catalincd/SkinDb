import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons, MaterialIcons} from '@expo/vector-icons';
import Colors from '../objects/colors';
import ItemsScreen from './ItemsScreen'
import CasesScreen from './CasesScreen'

const TabNavigator = createBottomTabNavigator(
    {
      Items: ItemsScreen,
      Cases: CasesScreen,
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          var component;
          if (routeName === 'Cases') {
            component = <Ionicons name="briefcase" size={24} color={tintColor} />;
          } else if (routeName === 'Items') {
            component = <MaterialIcons name="inventory" size={24} color={tintColor} />;
          }
  
          return component;
        },
      }),
      tabBarOptions: {
        activeTintColor: Colors.Accent,
        inactiveTintColor: 'white',
        activeBackgroundColor: Colors.HeaderBackground,
        inactiveBackgroundColor: Colors.HeaderBackground,
      },
    }
  );
export default createAppContainer(TabNavigator);