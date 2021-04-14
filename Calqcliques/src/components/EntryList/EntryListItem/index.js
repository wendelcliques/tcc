import React from 'react'
import {TouchableOpacity,
     View,
     Text,
    StyleSheet } from 'react-native'

import Color from '../../../styles/Colors'

const EntryListItem = ({entry,onEntryPress}) => {
    return (
        <View>
            <TouchableOpacity
            onPress={() => {
                onEntryPress && onEntryPress(entry);
            }}>
            <Text>{entry.termo1}</Text>
            </TouchableOpacity>            
        </View>
    )
}

export default EntryListItem
