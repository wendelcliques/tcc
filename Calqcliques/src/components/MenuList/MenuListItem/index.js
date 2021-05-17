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

    var1num,
    var2num,
    var3num,
    var4num,
    

}) => {
    //const [termo1, setTermo1] = useState(entry.termo1);
    //const [termo2, setTermo2] = useState(entry.termo2);
    console.log('MenuListItem :: var1num', JSON.stringify(var1num));
    return ( 
        
            <View style={styles.container}>
           
           <View style={styles.linha}>

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
                    {var1num}
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
                marginTop: -6,
            }}>
                    +
             </Text>
             </TouchableOpacity>
             </View>
           <View >
           <TouchableOpacity>
            <Text style={{
                fontSize:15,
                color: entry.termo2cor,
                backgroundColor: "rgba(80,80,80, 0.5)",
            }} >
                {entry.termo2} 
            </Text>
            </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity
                
                >
            <Text style={{
                 fontSize:15,
                 color: entry.termo3cor,
                 backgroundColor: "rgba(80,80,80, 0.5)",
              
            }} >
                {entry.termo3} 
            </Text>
            </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity>
            <Text style={{
                 fontSize:15,
                 color: entry.termo4cor,
                 backgroundColor: "rgba(80,80,80, 0.5)",
            }} >
                {entry.termo4} 
            </Text>
            </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity>
            <Text style={{
                 fontSize:15,
                 color: entry.termo5cor,
                 backgroundColor: "rgba(80,80,80, 0.5)",
            }} >
                {entry.termo5} 
            </Text>
            </TouchableOpacity>
            </View>

            <View >
                <TouchableOpacity>
            <Text style={{
                 fontSize:15,
                 color: entry.termo6cor,
                 backgroundColor: "rgba(80,80,80, 0.5)",
            }} >
                {entry.termo6} 
            </Text>
            </TouchableOpacity>
            </View>

            <View >
                <TouchableOpacity>
            <Text style={{
                 fontSize:25,
                 color: entry.termo7cor,
            }} >
                {entry.termo7} 
            </Text>
            </TouchableOpacity>
            </View>

            <View >
                <TouchableOpacity>
            <Text style={{
                 fontSize:25,
                 color: entry.termo8cor,
            }} >
                {entry.termo8} 
            </Text>
            </TouchableOpacity>
            </View>

            <View >
                <TouchableOpacity>
            <Text style={{
                 fontSize:25,
                 color: entry.termo9cor,
            }} >
                {entry.termo9} 
            </Text>
            </TouchableOpacity>
            </View>

            <View >
                <TouchableOpacity>
            <Text style={{
                 fontSize:25,
                 color: entry.termo10cor,
            }} >
                {entry.termo10} 
            </Text>
            </TouchableOpacity>
            </View>
           
         
            </View>

                        
            
    );
};

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
    linha: {
        flexDirection: 'row',
    }
   
    
});

export default MenuListItem 