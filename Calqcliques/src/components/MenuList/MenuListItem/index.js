/*import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

const MenuListItem = ({legenda, 
    onVar1PressAdd, 
    onVar1PressMin, 
    onVar2PressAdd, 
    onVar2PressMin,
    onVar3PressAdd, 
    onVar3PressMin,
    onVar4PressAdd, 
    onVar4PressMin

}) => {

    console.log('MenuListItem :: legend', JSON.stringify(legend));

    return (
        
        <View style={styles.container}>
            
            <View>
                <Text>variavel1</Text>
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
export default MenuListItem */

import React, {useState} from 'react'
import {TouchableOpacity,
     View,
     Text,
    StyleSheet } from 'react-native'

import Colors from '../../../styles/Colors'

const MenuListItem = ({entry,
    
    onEntryPress,
    onVar1PressAdd, 
    onVar1PressMin, 
    onVar2PressAdd, 
    onVar2PressMin,
    onVar3PressAdd, 
    onVar3PressMin,
    onVar4PressAdd, 
    onVar4PressMin,

    Var1Numero,
    Var2Numero,
    Var3Numero,
    Var4Numero
    

}) => {
    //const [termo1, setTermo1] = useState(entry.termo1);
    //const [termo2, setTermo2] = useState(entry.termo2);
    console.log('MenuListItem :: var1num', JSON.stringify(Var1Numero));
    console.log('MenuListItem :: onPress', JSON.stringify(onVar1PressAdd));
    console.log('MenuListItem :: entry', JSON.stringify(entry));

    return ( 
        
            <View style={styles.container}>
           
           <View style={styles.linha}>
            <View style={styles.details1}>
           <Text style={{
                fontSize: 19,
                color: entry.termo1cor,
                //backgroundColor: "rgba(80,80,80, 0.5)",
                marginLeft: 10,
                marginRight: 10,
            }}>
                    {entry.var1text}
             </Text>
             </View>
           <TouchableOpacity
               onPress={() => {
                onVar1PressMin && onVar1PressMin();
               }}
               >
            <Text style={{
                fontSize:20,
                color: "rgba(80,00,00, 1.0)",
                backgroundColor: "rgba(80,00,00, 0.5)",
                paddingLeft: 5,
                paddingRight: 5,
                marginTop: -5,
            }}>
                    -
             </Text>
             </TouchableOpacity>



               
               <TouchableOpacity
               onPress={() => {
                onVar1PressAdd && onVar1PressAdd();
               }}
               >
            <Text style={{
                fontSize: 19,
                color: entry.termo1cor,
                //backgroundColor: "rgba(80,80,80, 0.5)",
                marginLeft: 10,
                marginRight: 10,
            }}>
                    {Var1Numero}
             </Text>
             </TouchableOpacity>

             <TouchableOpacity
               onPress={() => {
                onVar1PressAdd && onVar1PressAdd();
               }}
               >
            <Text style={{
                fontSize:20,
                color: "rgba(00,00,00, 1.0)",
                backgroundColor: "rgba(00,80,00, 0.5)",
                paddingLeft: 5,
                paddingRight: 5,
                marginTop: -5,
            }}>
                    +
             </Text>
             </TouchableOpacity>
             </View>

             <View style={styles.linha}>

           <Text style={{
                fontSize: 15,
                color: entry.termo1cor,
                //backgroundColor: "rgba(80,80,80, 0.5)",
                marginLeft: 10,
                marginRight: 10,
            }}>
                    {entry.var2text}
             </Text>

           <TouchableOpacity
               onPress={() => {
                onVar2PressMin && onVar2PressMin();
               }}
               >
            <Text style={{
                fontSize:20,
                color: "rgba(80,00,00, 1.0)",
                backgroundColor: "rgba(80,00,00, 0.5)",
                paddingLeft: 5,
                paddingRight: 5,
                marginTop: -5,
            }}>
                    -
             </Text>
             </TouchableOpacity>



               
               <TouchableOpacity
               onPress={() => {
                onVar2PressAdd && onVar2PressAdd();
               }}
               >
            <Text style={{
                fontSize: 19,
                color: entry.termo1cor,
                //backgroundColor: "rgba(80,80,80, 0.5)",
                marginLeft: 10,
                marginRight: 10,
            }}>
                    {Var2Numero}
             </Text>
             </TouchableOpacity>

             <TouchableOpacity
               onPress={() => {
                onVar1PressAdd && onVar3PressAdd();
               }}
               >
            <Text style={{
                fontSize:20,
                color: "rgba(00,00,00, 1.0)",
                backgroundColor: "rgba(00,80,00, 0.5)",
                paddingLeft: 5,
                paddingRight: 5,
                marginTop: -5,
            }}>
                    +
             </Text>
             </TouchableOpacity>
             </View>

             <View style={styles.linha}>

<Text style={{
     fontSize: 19,
     color: entry.termo1cor,
     //backgroundColor: "rgba(80,80,80, 0.5)",
     marginLeft: 10,
     marginRight: 10,
 }}>
         {entry.var3text}
  </Text>

<TouchableOpacity
    onPress={() => {
     onVar1PressMin && onVar1PressMin();
    }}
    >
 <Text style={{
     fontSize:20,
     color: "rgba(80,00,00, 1.0)",
     backgroundColor: "rgba(80,00,00, 0.5)",
     paddingLeft: 5,
     paddingRight: 5,
     marginTop: -5,
 }}>
         -
  </Text>
  </TouchableOpacity>



    
    <TouchableOpacity
    onPress={() => {
     onVar1PressAdd && onVar1PressAdd();
    }}
    >
 <Text style={{
     fontSize: 19,
     color: entry.termo1cor,
     //backgroundColor: "rgba(80,80,80, 0.5)",
     marginLeft: 10,
     marginRight: 10,
 }}>
         {Var3Numero}
  </Text>
  </TouchableOpacity>

  <TouchableOpacity
    onPress={() => {
     onVar1PressAdd && onVar1PressAdd();
    }}
    >
 <Text style={{
     fontSize:20,
     color: "rgba(00,00,00, 1.0)",
     backgroundColor: "rgba(00,80,00, 0.5)",
     paddingLeft: 5,
     paddingRight: 5,
     marginTop: -5,
 }}>
         +
  </Text>
  </TouchableOpacity>
  </View>
  <View style={styles.linha}>

<Text style={{
     fontSize: 19,
     color: entry.termo1cor,
     //backgroundColor: "rgba(80,80,80, 0.5)",
     marginLeft: 10,
     marginRight: 10,
 }}>
        {entry.var4text}
  </Text>

<TouchableOpacity
    onPress={() => {
     onVar1PressMin && onVar1PressMin();
    }}
    >
 <Text style={{
     fontSize:20,
     color: "rgba(80,00,00, 1.0)",
     backgroundColor: "rgba(80,00,00, 0.5)",
     paddingLeft: 5,
     paddingRight: 5,
     marginTop: -5,
 }}>
         -
  </Text>
  </TouchableOpacity>



    
    <TouchableOpacity
    onPress={() => {
     onVar1PressAdd && onVar1PressAdd();
    }}
    >
 <Text style={{
     fontSize: 19,
     color: entry.termo1cor,
     //backgroundColor: "rgba(80,80,80, 0.5)",
     marginLeft: 10,
     marginRight: 10,
 }}>
         {Var4Numero}
  </Text>
  </TouchableOpacity>

  <TouchableOpacity
    onPress={() => {
     onVar1PressAdd && onVar1PressAdd();
    }}
    >
 <Text style={{
     fontSize:20,
     color: "rgba(00,00,00, 1.0)",
     backgroundColor: "rgba(00,80,00, 0.5)",
     paddingLeft: 5,
     paddingRight: 5,
     marginTop: -5,
 }}>
         +
  </Text>
  </TouchableOpacity>
  </View>
     
         
            </View>

                        
            
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
      
        backgroundColor: Colors.red,
        marginTop: -0,
        marginBottom: -30,
        padding:-10,
        paddingLeft: 0,
    },
    details1: {
        flex: 1,
        //flexDirection: "row",
        //backgroundColor: 'blue',
    },
    linha: {
        flexDirection: 'row',
    }
   
    
});

export default MenuListItem 