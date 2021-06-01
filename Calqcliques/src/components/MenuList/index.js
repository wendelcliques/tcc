
import React, {useEffect, useState} from 'react'
import { Alert, FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'

//import EntryListItem from './EntryListItem'
import MenuListItem from './MenuListItem'

import useEntries from '../../hooks/useEntries'

import Colors from '../../styles/Colors'
import TermoModal from '../TermoModal'


const MenuList = ({
    
    legenda,
    onVar1PressAddd,
    onVar1PressMinn,
    onVar2PressAddd,
    onVar2PressMinn,
    onVar3PressAddd,
    onVar3PressMinn,
    onVar4PressAddd,
    onVar4PressMinn,
var1Numero,
var2Numero,
var3Numero,
var4Numero,

var1text,
var2text,
var3text,
var4text,

desenvolvimento,
}) => {

   
    
    

    const navigation = useNavigation();
    const [entries] = useEntries();

    const [modalVisible, setModalVisible] = useState(false);

    const onClosePress = () => {
        setModalVisible(false);
    };
    console.log('MenuList :: var1num', JSON.stringify(var1Numero));

    console.log('MenuList :: var2num', JSON.stringify(var2Numero));
    console.log('MenuList :: var3num', JSON.stringify(var3Numero));
    console.log('MenuList :: var4num', JSON.stringify(var4Numero));

    console.log('MenuList :: botão 2',  onVar2PressAddd);
    console.log('MenuList :: legenda', JSON.stringify(legenda));
    console.log('MenuList :: desenvolvimento', desenvolvimento);

   

    return (
        <>
        {desenvolvimento && (
        <View 
        style={styles.container}
        >

<View >
           

           <View style={styles.linha}>
             <View style={styles.details1}>
<Text style={{
     fontSize: 15,
     color: "blue", //entry.termo1cor,
     //backgroundColor: "rgba(80,80,80, 0.5)",
     marginLeft: 10,
     marginRight: 10,
 }}>
         {var3text}
  </Text>
</View>
<TouchableOpacity
    onPress={() => {
     onVar3PressMinn && onVar3PressMinn();
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



    <View style={styles.botões}>
    <TouchableOpacity
    onPress={() => {
     onVar3PressAddd && onVar3PressAddd();
    }}
    >
 <Text style={{
     fontSize: 15,
     //color: entry.termo1cor,
     //backgroundColor: "rgba(80,80,80, 0.5)",
     marginLeft: 10,
     marginRight: 10,
 }}>
         {var3Numero}
  </Text>
  </TouchableOpacity>
  </View>
  <TouchableOpacity
    onPress={() => {
     onVar3PressAddd && onVar3PressAddd();
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
  <View style={styles.details1}>
<Text style={{
     fontSize: 15,
     color: "green", //entry.termo1cor,
     //backgroundColor: "rgba(80,80,80, 0.5)",
     marginLeft: 10,
     marginRight: 10,
 }}>
        {var4text}
  </Text>
</View>

<TouchableOpacity
    onPress={() => {
     onVar4PressMinn && onVar4PressMinn();
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



  <View style={styles.botões}>
    <TouchableOpacity
    onPress={() => {
     onVar4PressAddd && onVar4PressAddd();
    }}
    >
 <Text style={{
     
     fontSize: 15,
     //color: entry.termo1cor,
     //backgroundColor: "rgba(80,80,80, 0.5)",
     marginLeft: 10,
     marginRight: 10,
 }}>
         {var4Numero}
  </Text>
  </TouchableOpacity>
  </View>

  <TouchableOpacity
    onPress={() => {
     onVar4PressAddd && onVar4PressAddd();
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
            <View style={styles.details1}>
           <Text style={{
                fontSize: 15,
                color: "red", //entry.termo1cor,
                //backgroundColor: "rgba(80,80,80, 0.5)",
                marginLeft: 10,
                marginRight: 10,
            }}>
                    {var1text}
             </Text>
             </View>
           <TouchableOpacity
               onPress={() => {
                onVar1PressMinn && onVar1PressMinn();
               }} // botão de diminuir numero variável 1
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



             <View style={styles.botões}>
               <TouchableOpacity
               
               onPress={
                   
                () => {
                onVar1PressAddd && onVar1PressAddd();
               }}
               >
            <Text style={{
                fontSize: 15,
                //color: entry.termo1cor,
                //backgroundColor: "rgba(80,80,80, 0.5)",
                marginLeft: 10,
                marginRight: 10,
            }}>
                    {var1Numero}
             </Text>
             </TouchableOpacity>
</View>
             <TouchableOpacity
               onPress={() => {
                onVar1PressAddd && onVar1PressAddd();
               }} // botão de aumentar numero variável 1
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
             <View style={styles.details1}>
           <Text style={{
                fontSize: 15,
                color: "orange", //entry.termo1cor,
                //backgroundColor: "rgba(80,80,80, 0.5)",
                marginLeft: 10,
                marginRight: 10,
            }} // texto variável 2 
            >
                    {var2text} 
             </Text>
             </View>

           <TouchableOpacity
               onPress={() => {
                onVar2PressMinn && onVar2PressMinn();
               }} // botão de diminuir variável 2
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



             <View style={styles.botões}>
               <TouchableOpacity
               onPress={() => {
                onVar2PressAddd && onVar2PressAddd();
               }}// botão de aumentar vairável 2
               >
                   
            <Text style={{
                fontSize: 15,
                //color: entry.termo1cor,
                //backgroundColor: "rgba(80,80,80, 0.5)",
                marginLeft: 10,
                marginRight: 10,
            }}>
                    {var2Numero}
             </Text>
             </TouchableOpacity>
</View>
             <TouchableOpacity
               onPress={() => {
                onVar2PressAddd && onVar2PressAddd();
               }}
               >
            <Text style={{
                fontSize:20,
                color: "rgba(00,00,00, 1.0)",
                backgroundColor: "rgba(00,80,00, 0.5)",
                paddingLeft: 5,
                paddingRight: 5,
                
                marginTop: -5,
                //borderWidth: 1,
            }}>
                    +
             </Text>
             </TouchableOpacity>
             </View>








         
            </View>



        
          </View>

           

            
            
           
          
       
)}  
              

              </>
    )
}


const styles = StyleSheet.create({
   


    container: {
        flex: 1,
      
        //backgroundColor: Colors.red,
        alignContent: 'center',
        //marginTop: -0,
       // marginBottom: 0,
        //padding:-10,
        //paddingLeft: 0,
    },
    details1: {
        flex: 1,
        flexDirection: "row",
        //backgroundColor: 'blue',
        marginRight: 50,
    },
    linha: {
        //flex: 1,
        flexDirection: 'row',
        
    },
    botões: {
flexDirection: 'row',
minWidth: 45,
    },
    
});




export default MenuList

/*

onEntryPress={ () => {
   setModalVisible(true);
}}

onVar1PressAdd={onVar1PressAddd }
onVar1PressMin={onVar1PressMinn }
onVar2PressAdd={onVar2PressAddd }
onVar2PressMin={onVar2PressMinn }
onVar3PressAdd={onVar3PressAddd }
onVar3PressMin={onVar3PressMinn }
onVar4PressAdd={onVar4PressAddd }
onVar4PressMin={onVar4PressMinn }
      
*/

/* <TermoModal 
           isVisible={modalVisible}
           onCancel={onClosePress}
           entry={entries.termo1definicao}

           />*/