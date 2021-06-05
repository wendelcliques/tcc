import React, {useEffect, useState} from 'react'
import { Alert, FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'

import useEntries from '../../hooks/useEntries'

import Colors from '../../styles/Colors'
import TermoModal from '../TermoModal'
//import DesenItem from './DesenItem'

const Desenvolvimento = ({categoria,
    var1numero,
var2numero,
var3numero,
var4numero,

arit1,
arit2,
arit3,

vT,
tombo,
raioini,
raiotaxa,
altura,
alturataxa,
pmdas,
}) => {

    const navigation = useNavigation();
    const [entries] = useEntries(categoria);

    console.log("desenvol...:: entries1", JSON.stringify(entries));

    const [modalVisible, setModalVisible] = useState(false);
    const [termo1d, setTermo1d] = useState();
    const [termo2d, setTermo2d] = useState();
    const [termo3d, setTermo3d] = useState();
    const [termo4d, setTermo4d] = useState();
    const [termo5d, setTermo5d] = useState();
    const [termo6d, setTermo6d] = useState();
    const [termo7d, setTermo7d] = useState();
    const [termo8d, setTermo8d] = useState();
    const [termo9d, setTermo9d] = useState();
    const [termo10d, setTermo10d] = useState();

    const onClosePress = () => {
        setTermo1d();
        setTermo2d();
        setTermo3d();
        setTermo4d();
        setTermo5d();
        setTermo6d();
        setTermo7d();
        setTermo8d();
        setTermo9d();
        setTermo10d();
        setModalVisible(false);
    }



    return (
        <>
<View style={{
               flexDirection: 'row', 
               paddingLeft: 10,
               backgroundColor: Colors.blue,
            }}>
        <View>
            <TouchableOpacity
               onPress={() => {
                   //onEntryPress && onEntryPress();
                   setTermo1d(vT);
                   setModalVisible(true);
               }}
               >
            <Text style={{
                fontSize:15,
                color: "black", //entries.termo1dcor,
                //backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                v'(t)=
             </Text>
             </TouchableOpacity>
             </View>


             <View>
            <TouchableOpacity
               onPress={() => {
                   //onEntryPress && onEntryPress();
                   setTermo1d(tombo);
                   setModalVisible(true);
               }}
               >
            <Text style={{
                fontSize:15,
                color: "red", //entries.termo1dcor,
               // backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                2*
             </Text>
             </TouchableOpacity>
             </View>

        <View>
            <TouchableOpacity
               onPress={() => {
                  // onEntryPress && onEntryPress();
                   setTermo1d(raioini);
                   setModalVisible(true);
               }}
               >
            <Text style={{
                fontSize:15,
                color: "red", //entries.termo1dcor,
                //backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                {var1numero}*
             </Text>
             </TouchableOpacity>
             </View>


             

             
             <View>
            <TouchableOpacity
               onPress={() => {
                   //onEntryPress && onEntryPress();
                   setTermo1d(raiotaxa);
                   setModalVisible(true);
               }}
               >
            <Text style={{
                fontSize:15,
                color: "orange", //entries.termo1dcor,
                //backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                {var2numero}*
             </Text>
             </TouchableOpacity>
             </View>

             

             
             <View>
            <TouchableOpacity
               onPress={() => {
                   //onEntryPress && onEntryPress();
                   setTermo1d(altura);
                   setModalVisible(true);
               }}
               >
            <Text style={{
                fontSize:15,
                color: "blue", //entries.termo1dcor,
               // backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                {var3numero}+
             </Text>
             </TouchableOpacity>
             </View>


             <View>
            <TouchableOpacity
               onPress={() => {
                   //onEntryPress && onEntryPress();
                   setTermo1d(raioini);
                   setModalVisible(true);
               }}
               >
            <Text style={{
                fontSize:15,
                color: "red", //entries.termo1dcor,
                //backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                {var1numero}²*
             </Text>
             </TouchableOpacity>
             </View>

             <View>
            <TouchableOpacity
               onPress={() => {
                  // onEntryPress && onEntryPress();
                  setTermo1d(alturataxa);
                   setModalVisible(true);
               }}
               >
            <Text style={{
                fontSize:15,
                color: "green", //entries.termo1dcor,
                //backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                {var4numero}
             </Text>
             </TouchableOpacity>
             </View>


           
             </View>




<View style={{
               flexDirection: 'row', 
               paddingLeft: 10,
               backgroundColor: Colors.blue,
            }}>
        <View>
            <TouchableOpacity
               onPress={() => {
                   //onEntryPress && onEntryPress();
                   setTermo1d(vT);
                   setModalVisible(true);
               }}
               >
            <Text style={{
                fontSize:15,
                color: "black", //entries.termo1dcor,
                //backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                v'(t)=
             </Text>
             </TouchableOpacity>
             </View>


             <View>
            <TouchableOpacity
               onPress={() => {
                   //onEntryPress && onEntryPress();
                   setTermo1d(pmdas);
                   setModalVisible(true);
               }}
               >
            <Text style={{
                fontSize:15,
                color: "brown", //entries.termo1dcor,
               // backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                {arit1}+
             </Text>
             </TouchableOpacity>
             </View>

        <View>
            <TouchableOpacity
               onPress={() => {
                   //onEntryPress && onEntryPress();
                   setTermo1d(pmdas);
                   setModalVisible(true);
               }}
               >
            <Text style={{
                fontSize:15,
                color: "orange", //entries.termo1dcor,
                //backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                {arit2}
             </Text>
             </TouchableOpacity>
             </View>


             

             
            

           
             </View>



             <View style={{
               flexDirection: 'row', 
               paddingLeft: 10,
               backgroundColor: Colors.blue,
            }}>
             <View>
            <TouchableOpacity
               onPress={() => {
                  // onEntryPress && onEntryPress();
                  setTermo1d(vT);
                   setModalVisible(true);
               }}
               >
            <Text style={{
                fontSize:15,
                color: "black", //entries.termo1dcor,
                //backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                v'(t)=
             </Text>
             </TouchableOpacity>
             </View>

             

             
             <View>
            <TouchableOpacity
               onPress={() => {
                  // onEntryPress && onEntryPress();
                  setTermo1d(pmdas);
                   setModalVisible(true);
               }}
               >
            <Text style={{
                fontSize:15,
                color: "black", //entries.termo1dcor,
                //backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                {arit3} cm³/s
             </Text>
             </TouchableOpacity>
             </View>


             
</View>


<TermoModal 
           isVisible={modalVisible}
           onCancel={onClosePress}
          
            termo1dd={termo1d}
            termo2dd={termo2d}
            termo3dd={termo3d}
            termo4dd={termo4d}
            termo5dd={termo5d}
            termo6dd={termo6d}
            termo7dd={termo7d}
            termo8dd={termo8d}
            termo9dd={termo9d}
            termo10dd={termo10d}

           />

           </>
        
    )
}

export default Desenvolvimento


/*
<FlatList
data={entries}
keyExtractor={item => item.id}

renderItem={({item, index}) => (

 


<DesenItem 
 
 entry={item}

 var1numero={var1numero}
 var2numero={var2numero}
 var3numero={var3numero}
 var4numero={var4numero} 
 
 arit1={arit1}
 arit2={arit2}


 onEntryPress={ () => {

     setTermo1d(item.termo1definicao);
     setModalVisible(true);
 }}

 onEntryPress2={ () => {
     setTermo2d(item.termo2definicao);
     setModalVisible(true);
 }}
 onEntryPress3={ () => {
     setTermo3d(item.termo3definicao);
     setModalVisible(true);
 }}
 onEntryPress4={ () => {
     setTermo4d(item.termo4definicao);
     setModalVisible(true);
 }}
 onEntryPress5={ () => {
     setTermo5d(item.termo5definicao);
     setModalVisible(true);
 }}
 onEntryPress6={ () => {
     setTermo6d(item.termo6definicao);
     setModalVisible(true);
 }}
 onEntryPress7={ () => {
     setTermo7d(item.termo7definicao);
     setModalVisible(true);
 }}
 onEntryPress8={ () => {
     setTermo8d(item.termo8definicao);
     setModalVisible(true);
 }}
 onEntryPress9={ () => {
     setTermo9d(item.termo9definicao);
     setModalVisible(true);
 }}
 onEntryPress10={ () => {
     setTermo10d(item.termo10definicao);
     setModalVisible(true);
 }}


 /> 

 
 
)}
/>
*/
