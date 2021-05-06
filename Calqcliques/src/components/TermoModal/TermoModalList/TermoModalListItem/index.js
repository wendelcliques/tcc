import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TermoModallistItem = ({entry}) => {
    return (
        <View>
            <Text>{entry.termo1definicao}</Text>
        </View>
    )
}

export default TermoModallistItem