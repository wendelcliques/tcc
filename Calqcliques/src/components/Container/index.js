import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import Colors from '../../styles/Colors'

import MenuModo from '../Menu/MenuModo'

const Container = ({
    title,
    children,
    onPressActionButton,
    onModoPress,
    menumodo,
}) => {

const modo = (title === "Menu");

    return (
        <View style={styles.container}>
            <View style={styles.topo}>
            <TouchableOpacity
            onPress={onPressActionButton}>
            {title && <Text style={styles.title}>{title}</Text>}
            </TouchableOpacity>
{modo && (
            <MenuModo 
            onModoPress={onModoPress}
            menumodo={menumodo}
            
            />
            )}
            </View>
            {children}
            
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
        margin: 3,
        padding: 3,
    },
    topo: {
flexDirection: 'row',

//backgroundColor: 'red',
    },
    title: {
        fontSize: 13,
        color: Colors.carbonDark,
        marginBottom: 5,
    }
})

export default Container
