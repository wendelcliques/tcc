import React from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'

import ExplicalistItem from './ExplicaListItem'

import Colors from '../../../styles/Colors'

const ExplicaList = ({data}) => {
    return (
        <View>
        <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => <ExplicalistItem entry={item} />}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //flexDirection: 'row',
        backgroundColor: Colors.blue,
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        margin: 5,
        padding: 8,
    },
    topo: {
flexDirection: 'row',

//backgroundColor: 'red',
    },
    title: {
        fontSize: 13,
        color: Colors.carbonDark,
        marginBottom: 5,
    },
    
})
export default ExplicaList
