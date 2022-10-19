import {StatusBar} from 'expo-status-bar';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useState} from "react";
import {MaterialIcons} from '@expo/vector-icons'

export default function TodoItem({index, pressHandler} /* like constructor */) {
    return (<TouchableOpacity onPress={() => pressHandler(index.key)}>
            <View style={styles.item}>
                <MaterialIcons name={'delete'} size={18} color={'#333'} />
                <Text style={styles.itemText}>{index.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row'
    }, itemText: {
        marginLeft: 10,
    }
})
