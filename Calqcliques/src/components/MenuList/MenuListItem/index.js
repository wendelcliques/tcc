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
    Var4Numero,
    

}) => {
    //const [termo1, setTermo1] = useState(entry.termo1);
    //const [termo2, setTermo2] = useState(entry.termo2);
    console.log('MenuListItem :: var1num', JSON.stringify(Var1Numero));
    console.log('MenuListItem :: var2num', JSON.stringify(Var2Numero));
    console.log('MenuListItem :: var3num', JSON.stringify(Var3Numero));
    console.log('MenuListItem :: var4num', JSON.stringify(Var4Numero));
    console.log('MenuListItem :: onPress', onVar1PressAdd);
    console.log('MenuListItem :: onPress 2', onVar2PressAdd);
    console.log('MenuListItem :: onPress 3', JSON.stringify(onVar3PressAdd));
    console.log('MenuListItem :: entry', JSON.stringify(entry));

    return ( 
        
            <View >
           

           <View style={styles.linha}>
             <View style={styles.details1}>
<Text style={{
     fontSize: 15,
     color: entry.termo1cor,
     //backgroundColor: "rgba(80,80,80, 0.5)",
     marginLeft: 10,
     marginRight: 10,
 }}>
         {entry.var3text}
  </Text>
</View>
<TouchableOpacity
    onPress={() => {
     onVar3PressMin && onVar3PressMin();
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
     onVar3PressAdd && onVar3PressAdd();
    }}
    >
 <Text style={{
     fontSize: 15,
     color: entry.termo1cor,
     //backgroundColor: "rgba(80,80,80, 0.5)",
     marginLeft: 10,
     marginRight: 10,
 }}>
         {Var3Numero}
  </Text>
  </TouchableOpacity>
  </View>
  <TouchableOpacity
    onPress={() => {
     onVar3PressAdd && onVar3PressAdd();
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
     color: entry.termo1cor,
     //backgroundColor: "rgba(80,80,80, 0.5)",
     marginLeft: 10,
     marginRight: 10,
 }}>
        {entry.var4text}
  </Text>
</View>

<TouchableOpacity
    onPress={() => {
     onVar4PressMin && onVar4PressMin();
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
     onVar4PressAdd && onVar4PressAdd();
    }}
    >
 <Text style={{
     
     fontSize: 15,
     color: entry.termo1cor,
     //backgroundColor: "rgba(80,80,80, 0.5)",
     marginLeft: 10,
     marginRight: 10,
 }}>
         {Var4Numero}
  </Text>
  </TouchableOpacity>
  </View>

  <TouchableOpacity
    onPress={() => {
     onVar4PressAdd && onVar4PressAdd();
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
                onVar1PressAdd && onVar1PressAdd();
               }}
               >
            <Text style={{
                fontSize: 15,
                color: entry.termo1cor,
                //backgroundColor: "rgba(80,80,80, 0.5)",
                marginLeft: 10,
                marginRight: 10,
            }}>
                    {Var1Numero}
             </Text>
             </TouchableOpacity>
</View>
             <TouchableOpacity
               onPress={() => {
                onVar1PressAdd && onVar1PressAdd();
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
                color: entry.termo1cor,
                //backgroundColor: "rgba(80,80,80, 0.5)",
                marginLeft: 10,
                marginRight: 10,
            }} // texto variável 2 
            >
                    {entry.var2text} 
             </Text>
             </View>

           <TouchableOpacity
               onPress={() => {
                onVar2PressMin && onVar2PressMin();
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
                onVar2PressAdd && onVar2PressAdd();
               }}// botão de aumentar vairável 2
               >
                   
            <Text style={{
                fontSize: 15,
                color: entry.termo1cor,
                //backgroundColor: "rgba(80,80,80, 0.5)",
                marginLeft: 10,
                marginRight: 10,
            }}>
                    {Var2Numero}
             </Text>
             </TouchableOpacity>
</View>
             <TouchableOpacity
               onPress={() => {
                onVar2PressAdd && onVar2PressAdd();
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
        //flex: 1,
      
        backgroundColor: Colors.red,
        alignContent: 'center',
        //marginTop: -0,
       // marginBottom: 0,
        //padding:-10,
        //paddingLeft: 0,
    },
    details1: {
        flex: 1,
        //flexDirection: "row",
        //backgroundColor: 'blue',
    },
    linha: {
        flexDirection: 'row',
        
    },
    botões: {
flexDirection: 'row',
minWidth: 45,
    },
   
    
});

export default MenuListItem 