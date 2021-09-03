import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Tools from '../objects/tools';

const Item = props => {

    const navigation = useNavigation();
    var skin = props.json;
    var thisBorderColor = Tools.rarityToColor(skin["rarity"]);
    var thisColor = (thisBorderColor + '44');
    var thisUrl = Tools.imagesToUri(skin["images"]);
    
    var thisTitle = skin["fullname"];

    return <TouchableHighlight onPress={() => {navigation.navigate(props.target, {origin: thisTitle, json: skin});}} underlayColor={thisBorderColor} style={{...styles.item, backgroundColor:thisColor, borderColor: thisBorderColor}}>
                <View>
                    <Text style={styles.text}>{skin["paintkit"]}</Text>
                    <Image
                        style={styles.image}
                        source={{
                            uri: (Tools.imageURL + thisUrl),
                        }}
                        cache='force-cache'
                    />
                </View>
            </TouchableHighlight>;
}

const styles = StyleSheet.create({
    item : {
        width: Dimensions.get("window").width / 2.3,
        height: Dimensions.get("window").width / 2.3,
        marginHorizontal: 10,
        padding: 20,
        paddingTop: 15,
        backgroundColor: 'grey',
        borderWidth: 3,
        borderColor: 'grey',
        justifyContent: 'center',
        borderRadius: 8,
        alignItems: 'center'
    },
    text : {
        color: 'white',
        textAlign: 'center',
    },
    image : {
        margin: 10,
        marginTop: 15,
        width: Dimensions.get("window").width / 3,
        height: Dimensions.get("window").width / (3 * (4.0/3.0)),
    }
});




export default Item;