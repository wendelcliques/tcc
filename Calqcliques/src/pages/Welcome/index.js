import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import Colors from '../../styles/Colors';

const Welcome = ({navigation}) => {
    return (
        <View style={styles.container}>

            <TouchableOpacity 
            onPress={() => navigation.navigate('Treinamento')}
            style={styles.button}>
                <Text 
                style={[styles.paragraph,
                    {color: Colors.white,
                        fontWeight: 'bold',
                        fontSize: 16,}
                
                ]} 
                
                >Treinamento</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => navigation.navigate('Aventura')}
            style={styles.button}>
                <Text style={styles.buttonText}>Aventura</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.champagne,
    },
    button: {
        height: 20,
        width: '40%',
        backgroundColor: Colors.carbon,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: 16,
    }
});

export default Welcome
