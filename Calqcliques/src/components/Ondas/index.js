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
               backgroundColor: Colors.blue,
            }}>
        <View>
            <TouchableOpacity
               onPress={() => {
                   //onEntryPress && onEntryPress();
                   setTermo1d("G(x) se refere à função G que será derivada em função de x");
                   setModalVisible(true);
               }}
               >
            <Text style={{
                fontSize:15,
                color: "black", //entries.termo1dcor,
               // backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                G(x)=
             </Text>
             </TouchableOpacity>
             </View>


             <View>
            <TouchableOpacity
            style={{
               // marginLeft: 5,
                color: "red", //entries.termo1dcor,
                
            }}
               onPress={() => {
                   //onEntryPress && onEntryPress();
                   setTermo1d("sen é a função externa dessa função composta, pois o seno está sendo aplicado em outra função e não apenas em uma variável.");
                   setModalVisible(true);
               }}
               >
            <Text style={{
                
                fontSize:15,
                color: "red", //entries.termo1dcor,
               // backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                sen(
             </Text>
             </TouchableOpacity>
             </View>

        <View>
            <TouchableOpacity
               onPress={() => {
                  // onEntryPress && onEntryPress();
                   setTermo1d("x² é a função interna dessa função composta, pois é um x elevado ao quadrado, e a tabela de derivadas prevê a derivação de seno de x, não seno de x mais alguma cois, ou seno de x elevado a alguma coisa, ou qualquer outra coisa a mais aplicada em x.");
                   setModalVisible(true);
               }}
               >
            <Text style={{
                fontSize:15,
                color: "green", //entries.termo1dcor,
                //backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                x²
             </Text>
             </TouchableOpacity>
             </View>


             

             
             <View>
            <TouchableOpacity
               onPress={() => {
                   //onEntryPress && onEntryPress();
                   setTermo1d("sen é a função externa dessa função composta, pois o seno está sendo aplicado em outra função e não apenas em uma variável.");
                   setModalVisible(true);
               }}
               >
            <Text style={{
                fontSize:15,
                color: "red", //entries.termo1dcor,
                //backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                )
             </Text>
             </TouchableOpacity>
             </View>

             


           
             </View>

             <View style={{
               flexDirection: 'row', 
               paddingLeft: 10,
               backgroundColor: Colors.blue,
            }}>
                 <Text>
                     A função interna é:
                 </Text>
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
                   setTermo1d("u(x) é a função interna dessa função composta. É importante fazer anotações separando as funções compostas a serem derivadas para que não corra o risco de se perder durante a derivação.");
                   setModalVisible(true);
               }}
               >
            <Text style={{
                fontSize:15,
                color: "black", //entries.termo1dcor,
                //backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                u(x)= 
             </Text>
             </TouchableOpacity>
             </View>


             <View>
            <TouchableOpacity
               onPress={() => {
                   //onEntryPress && onEntryPress();
                   setTermo1d("x² é a função interna dessa função composta.");
                   setModalVisible(true);
               }}
               >
            <Text style={{
                fontSize:15,
                color: "green", //entries.termo1dcor,
                //backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                x²
             </Text>
             </TouchableOpacity>
             </View>

              

             
            

           
             </View>


             <View style={{
               flexDirection: 'row', 
               paddingLeft: 10,
               backgroundColor: Colors.blue,
            }}>
                 <Text>
                     A função externa é:
                 </Text>
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
                   setTermo1d("v(u) é a função externa dessa função composta. É importante fazer anotações separando as funções compostas a serem derivadas para que não corra o risco de se perder durante a derivação.");
                   setModalVisible(true);
               }}
               >
            <Text style={{
                fontSize:15,
                color: "black", //entries.termo1dcor,
                //backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                v(u)= 
             </Text>
             </TouchableOpacity>
             </View>


             <View>
            <TouchableOpacity
               onPress={() => {
                   //onEntryPress && onEntryPress();
                   setTermo1d(" A função de seno está interagindo com outra função ao invés de uma variável, e por isso se torna a função externa dessa função composta. Já que a tabela de derivadas preve a interação de seno com uma variável, a função interna será substituida pela variável u.");
                   setModalVisible(true);
               }}
               >
            <Text style={{
                fontSize:15,
                color: "red", //entries.termo1dcor,
                //backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                sen
             </Text>
             </TouchableOpacity>
             </View>


             <View>
            <TouchableOpacity
               onPress={() => {
                   //onEntryPress && onEntryPress();
                   setTermo1d("a variável u está sendo utilizada no lugar da função interna x² para ser possivel derivar a função do seno utilizando a tabela de derivação.");
                   setModalVisible(true);
               }}
               >
            <Text style={{
                fontSize:15,
                color: "green", //entries.termo1dcor,
               // backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                u
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
     setTermo1d("Depois que as funções interna e externa da função composta estão definidas, o primeiro passo é derivar a função interna.");
      setModalVisible(true);
  }}
  >
<Text style={{
   fontSize:15,
   color: "black", //entries.termo1dcor,
   //backgroundColor: "rgba(80,80,80, 0.5)",
}}>
   1º passo: 
</Text>
</TouchableOpacity>
</View>




<View>
<TouchableOpacity
  onPress={() => {
     // onEntryPress && onEntryPress();
     setTermo1d("u'(x) indica que a função interna u será derivada em função da variável x.");
      setModalVisible(true);
  }}
  >
<Text style={{
    marginLeft: 5,
   fontSize:15,
   color: "black", //entries.termo1dcor,
   //backgroundColor: "rgba(80,80,80, 0.5)",
}}>
   u'(x) =
</Text>
</TouchableOpacity>
</View>


<View>
<TouchableOpacity
  onPress={() => {
     // onEntryPress && onEntryPress();
     setTermo1d("A função interna u vale x². Aplicando-se a regra do tombo, desce o expoente e subtrai 1 do expoente original, resultando em 2x.");
      setModalVisible(true);
  }}
  >
<Text style={{
   fontSize:15,
   color: "green", //entries.termo1dcor,
   //backgroundColor: Colors.blue,
}}>
   2x
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
                  setTermo1d("O segundo passo da regra da cadeia consiste em derivar a função externa.");
                   setModalVisible(true);
               }}
               >
            <Text style={{
                fontSize:15,
                color: "black", //entries.termo1dcor,
                //backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                2º passo: 
             </Text>
             </TouchableOpacity>
             </View>

             

             
             <View>
            <TouchableOpacity
               onPress={() => {
                  // onEntryPress && onEntryPress();
                  setTermo1d("v'(u) indica que a função externa v será derivada em função da variável u.");
                   setModalVisible(true);
               }}
               >
            <Text style={{
                marginLeft: 5,
                fontSize:15,
                color: "black", //entries.termo1dcor,
                //backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                v'(u) =
             </Text>
             </TouchableOpacity>
             </View>


             <View>
            <TouchableOpacity
               onPress={() => {
                  // onEntryPress && onEntryPress();
                  setTermo1d("A derivada da função sen u é cos u, conforme a tabela de derivação.");
                   setModalVisible(true);
               }}
               >
            <Text style={{
                fontSize:15,
                color: "red", //entries.termo1dcor,
                //backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                cos
             </Text>
             </TouchableOpacity>
             </View>


             <View>
            <TouchableOpacity
               onPress={() => {
                  // onEntryPress && onEntryPress();
                  setTermo1d("a variável u está sendo utilizada no lugar da função interna x² para ser possivel derivar a função do seno utilizando a tabela de derivação.");
                   setModalVisible(true);
               }}
               >
            <Text style={{
                fontSize:15,
                color: "green", //entries.termo1dcor,
                //backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                u
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
                  setTermo1d("O terceiro passo da regra da cadeia consiste em multiplicar u'(x) com v'(u).");
                   setModalVisible(true);
               }}
               >
            <Text style={{
                fontSize:15,
                color: "black", //entries.termo1dcor,
               // backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                3º passo: 
             </Text>
             </TouchableOpacity>
             </View>

             

             
             <View>
            <TouchableOpacity
               onPress={() => {
                  // onEntryPress && onEntryPress();
                  setTermo1d("u'(x) vale 2x.");
                   setModalVisible(true);
               }}
               >
            <Text style={{
                marginLeft: 5,
                fontSize:15,
                color: "green", //entries.termo1dcor,
               // backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                2x
             </Text>
             </TouchableOpacity>
             </View>


             <View>
            <TouchableOpacity
               onPress={() => {
                  // onEntryPress && onEntryPress();
                  setTermo1d("v'(u) vale cos u.");
                   setModalVisible(true);
               }}
               >
            <Text style={{
                fontSize:15,
                color: "red", //entries.termo1dcor,
                //backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                cos
             </Text>
             </TouchableOpacity>
             </View>


             <View>
            <TouchableOpacity
               onPress={() => {
                  // onEntryPress && onEntryPress();
                  setTermo1d("v'(u) vale cos u.");
                   setModalVisible(true);
               }}
               >
            <Text style={{
                fontSize:15,
                color: "green", //entries.termo1dcor,
                //backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                u
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
                  setTermo1d("O quarto passo da regra da cadeia consiste em substituir a variável u pela sua função original. ");
                   setModalVisible(true);
               }}
               >
            <Text style={{
                fontSize:15,
                color: "black", //entries.termo1dcor,
                //backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                4º passo: 
             </Text>
             </TouchableOpacity>
             </View>

             

             
             <View>
            <TouchableOpacity
               onPress={() => {
                  // onEntryPress && onEntryPress();
                  setTermo1d("G'(x) significa que a função composta G foi derivada em função da variável x, tanto na função interna quanto na função externa.");
                   setModalVisible(true);
               }}
               >
            <Text style={{
                marginLeft: 5,
                fontSize:15,
                color: "black", //entries.termo1dcor,
               // backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                G'(x) =
             </Text>
             </TouchableOpacity>
             </View>


             <View>
            <TouchableOpacity
               onPress={() => {
                  // onEntryPress && onEntryPress();
                  setTermo1d("u'(x) vale 2x.");
                   setModalVisible(true);
               }}
               >
            <Text style={{
                fontSize:15,
                color: "green", //entries.termo1dcor,
                //backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                2x
             </Text>
             </TouchableOpacity>
             </View>


             <View>
            <TouchableOpacity
               onPress={() => {
                  // onEntryPress && onEntryPress();
                  setTermo1d("v'(u) vale cos u.");
                   setModalVisible(true);
               }}
               >
            <Text style={{
                fontSize:15,
                color: "red", //entries.termo1dcor,
                //backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                cos(
             </Text>
             </TouchableOpacity>
             </View>

             <View>
            <TouchableOpacity
               onPress={() => {
                  // onEntryPress && onEntryPress();
                  setTermo1d("x² é a função interna original que foi substituida pela variável u para o desenvolvimento do exercício.");
                   setModalVisible(true);
               }}
               >
            <Text style={{
                fontSize:15,
                color: "green", //entries.termo1dcor,
                //backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                x²
             </Text>
             </TouchableOpacity>
             </View>

             <View>
            <TouchableOpacity
               onPress={() => {
                  // onEntryPress && onEntryPress();
                  setTermo1d("v'(u) vale cos u.");
                   setModalVisible(true);
               }}
               >
            <Text style={{
                fontSize:15,
                color: "red", //entries.termo1dcor,
                //backgroundColor: "rgba(80,80,80, 0.5)",
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
