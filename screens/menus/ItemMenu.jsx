import React from "react";
import {
  Button,
  Image,
  Text,
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import Colors from "../../objects/colors";
import Weapons from "../../objects/weapons";
import Tools from "../../objects/tools";
import ItemGrid from "../../components/ItemGrid";

function ItemMenu({ route, navigation }) {
  var skin = route.params.json;

  var thisBorderColor = Tools.rarityToColor(skin["rarity"]);
  var thisColor = thisBorderColor + "44";
  var thisUrl = Tools.imagesToUri(skin["hdImages"]);
  if(thisUrl == '-')thisUrl = Tools.imagesToUri(skin["images"]);

  //console.log(thisUrl);

  return (
    <View style={styles.bigContainer}>
      <View style={{ ...styles.container }}>
        <TouchableHighlight
          onPress={() => {}}
          underlayColor={thisBorderColor}
          style={{
            ...styles.imageContainer,
            borderColor: thisBorderColor,
            backgroundColor: thisColor,
          }}
        >
          <Image
            style={styles.image}
            source={{
              uri: (Tools.imageURL + thisUrl),
            }}
            cache="force-cache"
          />
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    marginVertical: Dimensions.get("window").width * 0.045,
    borderRadius: 10,
    borderWidth: 3,
    width: Dimensions.get("window").width / 1.1,
    height: (Dimensions.get("window").width / 1.1) * (3.0 / 4.0),
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "90%",
    height: "90%",
  },
  bigContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.Background,
  },
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});

export default ItemMenu;
