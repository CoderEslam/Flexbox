import {StatusBar} from 'expo-status-bar';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";

export default function Sandbox() {
    return (
        <View style={styles.container}>

            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>


        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        paddingTop: 40,
        flexDirection: 'row',
        backgroundColor: '#ddd',
        alignItems:'flex-end',
        justifyContent:'space-around',
    },
    boxOne: {
        flex: 1,
        padding: 10,
        backgroundColor: 'violet',
        justifyContent: 'center',
        textAlign: 'center'
    },
    boxTwo: {
        flex: 1,
        padding: 20,
        backgroundColor: 'gold',
    },
    boxThree: {
        flex: 1,
        padding: 30,
        backgroundColor: 'coral',
    },
    boxFour: {
        flex: 1,
        padding: 40,
        backgroundColor: 'skyblue',
    },

});