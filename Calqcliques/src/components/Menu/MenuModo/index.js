import React, {useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const MenuModo = ({onModoPress}) => {

const [modo, setModo] = useState("Modo Treinamento")

    return (
        <View >

<View style={{
     alignContent: 'flex-end',
     justifyContent: 'flex-end',
     alignItems: 'flex-end',
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
                   onModoPress && onModoPress(modo);

                   modo === "Modo Treinamento" ? setModo("Modo Aventura") : setModo("Modo Treinamento") ;
                   //setModalVisible(true);
               }}
               >
            <Text style={{
                fontSize:15,
                color: "white", //entries.termo1dcor,
                backgroundColor: "rgba(80,80,80, 0.5)",
            }}>

                {modo}
             </Text>
             </TouchableOpacity>
             </View>
             </View>
             </View>
    )
}

export default MenuModo
