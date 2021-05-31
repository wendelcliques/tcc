import React, {useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const MenuModo = ({onModoPress, menumodo}) => {



    return (
        <View >

<View style={{
     
              // flexDirection: 'row', 
               //paddingLeft: 10,
               //backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
        <View style={{
           

                borderWidth: 1,
                borderRadius: 5,
                color: "white", //entries.termo1dcor,
                backgroundColor: "rgba(80,80,80, 0.5)",
                marginHorizontal: 100,
               // flexDirection: 'end',
            }}>
            <TouchableOpacity
               onPress={() => {
                   onModoPress && onModoPress(menumodo);

                  
                   //setModalVisible(true);
               }}
               >
            <Text style={{
                fontSize:15,
                color: "white", //entries.termo1dcor,
                backgroundColor: "rgba(80,80,80, 0.5)",
            }}>

                {menumodo}
             </Text>
             </TouchableOpacity>
             </View>
             </View>
             </View>
    )
}

export default MenuModo
