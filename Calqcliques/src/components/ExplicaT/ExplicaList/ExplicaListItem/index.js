import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ExplicalistItem = ({entry}) => {
    return (
        <View>
            <Text>{entry.expT}</Text>
        </View>
    )
}

export default ExplicalistItem
