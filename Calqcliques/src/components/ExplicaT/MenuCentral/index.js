import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const MenuCentral = () => {
    return (
        <View style={{
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            
            //backgroundColor: "rgba(80,80,80, 0.5)",
         }}>

<View style={{
               flexDirection: 'row', 
               //paddingLeft: 10,
               //backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
        <View style={{

                borderWidth: 1,
                borderRadius: 5,
                color: "white", //entries.termo1dcor,
                backgroundColor: "rgba(80,80,80, 0.5)",
                marginHorizontal: 20,
            }}>
            <TouchableOpacity
               onPress={() => {
                   //onEntryPress && onEntryPress();
                   setTermo1d(vT);
                   setModalVisible(true);
               }}
               >
            <Text style={{
                fontSize:15,
                color: "white", //entries.termo1dcor,
                backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                Bem Vindo
             </Text>
             </TouchableOpacity>
             </View>


             <View style={{

borderWidth: 1,
borderRadius: 5,
color: "black", //entries.termo1dcor,
backgroundColor: "rgba(80,80,80, 0.5)",
marginHorizontal: 20,
}}>
            <TouchableOpacity
               onPress={() => {
                   //onEntryPress && onEntryPress();
                   setTermo1d(tombo);
                   setModalVisible(true);
               }}
               >
            <Text style={{
                fontSize:15,
                color: "white", //entries.termo1dcor,
                backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                Taxa de variação
             </Text>
             </TouchableOpacity>
             </View>

        <View style={{

borderWidth: 1,
borderRadius: 5,
color: "black", //entries.termo1dcor,
backgroundColor: "rgba(80,80,80, 0.5)",
marginHorizontal: 20,
}}>
            <TouchableOpacity
               onPress={() => {
                  // onEntryPress && onEntryPress();
                   setTermo1d(raioini);
                   setModalVisible(true);
               }}
               >
            <Text style={{
                fontSize:15,
                color: "white", //entries.termo1dcor,
                backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                Ondas
             </Text>
             </TouchableOpacity>
             </View>


             

             
             

             </View>


        </View>
    )
}

export default MenuCentral
