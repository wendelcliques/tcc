import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

const index = ({legend, 
    onVar1PressAdd, 
    onVar1PressMin, 
    onVar2PressAdd, 
    onVar2PressMin,
    onVar3PressAdd, 
    onVar3PressMin,
    onVar4PressAdd, 
    onVar4PressMin,

}) => {
    return (
        <View style={styles.container}>
            <Text>variavel1{legend.var1text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      flexDirection: 'row',
        //backgroundColor: Colors.red,
        marginTop: 0,
        marginBottom: -13,
        padding:-10,
    },
    details1: {
        flex: 1,
        //flexDirection: "row",
        backgroundColor: 'blue',
    },
   
    
});
export default index
