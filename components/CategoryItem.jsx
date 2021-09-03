import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Tools from '../objects/tools';

const CategoryItem = props => {
    
    var skin = props.json;
    var thisBorderColor = 'white';
    var thisColor = '#444444';
    var thisUrl = imagesToUri(skin["images"]);
    const navigation = useNavigation();

    return (<TouchableHighlight onPress={() => {navigation.navigate(props.target, {origin: props.item.name, id:props.item.id});}} style={{...styles.item, backgroundColor:thisColor, borderColor: thisBorderColor}}>
                <View>
                    <Text style={styles.text}>{props.item.name}</Text>
                    <Image
                        style={styles.image}
                        source={{
                            uri: (Tools.imageURL + thisUrl),
                        }}
                        cache='force-cache'
                    />
                </View>
            </TouchableHighlight>);
}

const styles = StyleSheet.create({
    item : {
        width: Dimensions.get("window").width / 2.3,
        height: Dimensions.get("window").width / 2.3,
        marginHorizontal: 10,
        marginVertical: 10,
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


const imagesToUri = imgs => {
    var conditions = ["Factory New", "Minimal Wear", "Field-Tested", "Well-Worn", "Battle-Scarred"];

    for(var i=0;i<conditions.length;i++){
        if(imgs[conditions[i]] !== undefined)
        {
            return imgs[conditions[i]];
        }
    }

    return "";
}

export default CategoryItem;