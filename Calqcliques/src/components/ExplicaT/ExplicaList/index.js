import React from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'

import ExplicalistItem from './ExplicaListItem'

const ExplicaList = ({data}) => {
    return (
        <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => <ExplicalistItem entry={item} />}
        />
    )
}

export default ExplicaList
