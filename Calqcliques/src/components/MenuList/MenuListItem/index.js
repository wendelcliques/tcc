import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

const index = ({legenda, 
    onVar1PressAdd, 
    onVar1PressMin, 
    onVar2PressAdd, 
    onVar2PressMin,
    onVar3PressAdd, 
    onVar3PressMin,
    onVar4PressAdd, 
    onVar4PressMin,

}) => {

    console.log('MenuListItem :: legend', JSON.stringify(legend));

    return (
        
        <View style={styles.container}>
            
            <View>
                <Text>variavel1{legenda.var1text}</Text>
            </View>
            
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
