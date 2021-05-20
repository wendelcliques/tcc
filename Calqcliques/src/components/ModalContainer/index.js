import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import Colors from '../../styles/Colors'

const ModalContainer = ({
    title,
    children,
    onPressActionButton
}) => {
    return (
        <View style={styles.container}>
        <TouchableOpacity
        onPress={onPressActionButton}>
        {title && <Text style={styles.title}>{title}</Text>}
        </TouchableOpacity>
        {children}
        
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.asphalt,
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        margin: 5,
        padding: 8,
    },
    title: {
        fontSize: 12,
        color: Colors.white,
        marginBottom: 5,
    }
})

export default ModalContainer
