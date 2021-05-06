import React from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'

import TermoModallistItem from './TermoModalListItem'

const TermoModalList = ({data}) => {
    return (
        <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => <TermoModallistItem entry={item} />}
        />
    )
}

export default TermoModalList