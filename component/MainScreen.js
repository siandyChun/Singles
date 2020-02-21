import React, { Component } from 'react';
import { StyleSheet, View, Text} from 'react-native';

export default class MainScreen extends Component {
    render(){
        return (
            <View>
                <Text>This is Main Screen</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
    },

    Text: {
        fontSize: 35
    }
});