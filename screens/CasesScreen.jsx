import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import Colors from '../objects/colors';


class CasesScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Home!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.Background,
    }
});

export default CasesScreen;
