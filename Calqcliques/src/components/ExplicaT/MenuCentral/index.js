import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const MenuCentral = ({
    onMenuCentralPress,
    onMenuCentralPress1,
    onMenuCentralPress2,
    categoria,
}) => {
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
                onMenuCentralPress && onMenuCentralPress("Bem vindo");
                   //setTermo1d(vT);
                   //setModalVisible(true);
               }}
               >
            <Text style={{
                fontSize:15,
                color: "white", //entries.termo1dcor,
                backgroundColor: categoria === "Bem vindo"? "rgba(99,80,00, 1.0)" : "rgba(80,80,80, 0.5)",
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
                   onMenuCentralPress1 && onMenuCentralPress1("Taxa de variação");
                   //setTermo1d(tombo);
                   //setModalVisible(true);
               }}
               >
            <Text style={{
                fontSize:15,
                color: "white", //entries.termo1dcor,
                backgroundColor: categoria === "taxa de variação"? "rgba(99,80,00, 1.0)" : "rgba(80,80,80, 0.5)",
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
                onMenuCentralPress2 && onMenuCentralPress2("Ondas");
                   //setTermo1d(raioini);
                   //setModalVisible(true);
               }}
               >
            <Text style={{
                fontSize:15,
                color: "white", //entries.termo1dcor,
                backgroundColor: categoria === "ondas"? "rgba(99,80,00, 1.0)" : "rgba(80,80,80, 0.5)",
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
