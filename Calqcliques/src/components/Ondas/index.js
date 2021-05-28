import React, {useEffect, useState} from 'react'
import { Alert, FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'


import Colors from '../../styles/Colors'
import TermoModal from '../TermoModal'

const Ondas = () => {
    
    const navigation = useNavigation();
    

    

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
               //backgroundColor: "rgba(80,80,80, 0.5)",
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
                backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                G(x)=
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
                backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                sen(
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
                color: "green", //entries.termo1dcor,
                backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                x²
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
                color: "red", //entries.termo1dcor,
                backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                )
             </Text>
             </TouchableOpacity>
             </View>

             


           
             </View>

             <View style={{
               flexDirection: 'row', 
               paddingLeft: 10,
            }}>
                 <Text>
                     A função interna é:
                 </Text>
             </View>




<View style={{
               flexDirection: 'row', 
               paddingLeft: 10,
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
                backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                u(x)= 
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
                color: "green", //entries.termo1dcor,
                backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                x²
             </Text>
             </TouchableOpacity>
             </View>

              

             
            

           
             </View>


             <View style={{
               flexDirection: 'row', 
               paddingLeft: 10,
            }}>
                 <Text>
                     A função externa é:
                 </Text>
             </View>



             <View style={{
               flexDirection: 'row', 
               paddingLeft: 10,
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
                backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                v(u)= 
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
                color: "red", //entries.termo1dcor,
                backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                sen
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
                color: "green", //entries.termo1dcor,
                backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                u
             </Text>
             </TouchableOpacity>
             </View>

              

             
            

           
             </View>



             


<View style={{
  flexDirection: 'row', 
  paddingLeft: 10,
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
   backgroundColor: "rgba(80,80,80, 0.5)",
}}>
   1º passo: 
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
   backgroundColor: "rgba(80,80,80, 0.5)",
}}>
   u'(x) =
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
   color: "green", //entries.termo1dcor,
   backgroundColor: "rgba(80,80,80, 0.5)",
}}>
   2x
</Text>
</TouchableOpacity>
</View>


             
</View>


<View style={{
               flexDirection: 'row', 
               paddingLeft: 10,
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
                backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                2º passo: 
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
                backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                v'(u) =
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
                color: "red", //entries.termo1dcor,
                backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                cos
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
                color: "green", //entries.termo1dcor,
                backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                u
             </Text>
             </TouchableOpacity>
             </View>


             </View>





             <View style={{
               flexDirection: 'row', 
               paddingLeft: 10,
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
                backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                3º passo: 
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
                color: "green", //entries.termo1dcor,
                backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                2x
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
                color: "red", //entries.termo1dcor,
                backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                cos
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
                color: "green", //entries.termo1dcor,
                backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                u
             </Text>
             </TouchableOpacity>
             </View>


             </View>


             <View style={{
               flexDirection: 'row', 
               paddingLeft: 10,
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
                backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                4º passo: 
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
                backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                G'(x) =
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
                color: "green", //entries.termo1dcor,
                backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                2x
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
                color: "red", //entries.termo1dcor,
                backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                cos(
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
                color: "green", //entries.termo1dcor,
                backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                x²
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
                color: "red", //entries.termo1dcor,
                backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                )
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

export default Ondas
