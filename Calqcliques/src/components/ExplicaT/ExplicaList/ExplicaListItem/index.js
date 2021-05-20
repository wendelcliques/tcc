import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ExplicalistItem = ({entry}) => {
    console.log('ExplicaT:: entry', JSON.stringify(entry));
    return (
        <View>
            <Text>{entry.expT}</Text>
        </View>
    )
}

export default ExplicalistItem
