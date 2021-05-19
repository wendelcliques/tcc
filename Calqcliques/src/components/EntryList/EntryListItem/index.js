import React, {useState} from 'react'
import {TouchableOpacity,
     View,
     Text,
    StyleSheet } from 'react-native'

import Colors from '../../../styles/Colors'

const EntryListItem = ({entry,
    onEntryPress,
    onEntryPress2,
    onEntryPress3,
    onEntryPress4,
    onEntryPress5,
    onEntryPress6,
    onEntryPress7,
    onEntryPress8,
    onEntryPress9,
    onEntryPress10,

    Var1Numero,
    Var2Numero,
    Var3Numero,
    Var4Numero
}) => {
    //const [termo1, setTermo1] = useState(entry.termo1);
    //const [termo2, setTermo2] = useState(entry.termo2);
    return ( 
        
            <View style={styles.container}>
           
           <View >
               <TouchableOpacity
               onPress={() => {
                   onEntryPress && onEntryPress();
               }}
               >
            <Text style={{
                fontSize:15,
                color: entry.termo1cor,
                backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                {entry.termo1}
             </Text>
             </TouchableOpacity>
             </View>
           <View >
           <TouchableOpacity
           onPress={() => {
            onEntryPress2 && onEntryPress2();
        }}
           >
            <Text style={{
                fontSize:15,
                color: entry.termo2cor,
                backgroundColor: "rgba(80,80,80, 0.5)",
            }} >
                {entry.termo2} {Var1Numero}
            </Text>
            </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity
                 onPress={() => {
                    onEntryPress3 && onEntryPress3();
                }}
                >
            <Text style={{
                 fontSize:15,
                 color: entry.termo3cor,
                 backgroundColor: "rgba(80,80,80, 0.5)",
              
            }} >
                {entry.termo3} {Var2Numero}
            </Text>
            </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity
                
                onPress={() => {
                    onEntryPress4 && onEntryPress4();
                }}>
            <Text style={{
                 fontSize:15,
                 color: entry.termo4cor,
                 backgroundColor: "rgba(80,80,80, 0.5)",
            }} >
                {entry.termo4} {Var3Numero}
            </Text>
            </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity
                 onPress={() => {
                    onEntryPress5 && onEntryPress5();
                }}>
            <Text style={{
                 fontSize:15,
                 color: entry.termo5cor,
                 backgroundColor: "rgba(80,80,80, 0.5)",
            }} >
                {entry.termo5} {Var4Numero}
            </Text>
            </TouchableOpacity>
            </View>

            <View >
                <TouchableOpacity
                 onPress={() => {
                    onEntryPress6 && onEntryPress6();
                }}
                >
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
                <TouchableOpacity
                 onPress={() => {
                    onEntryPress7 && onEntryPress7();
                }}>
            <Text style={{
                 fontSize:25,
                 color: entry.termo7cor,
                 backgroundColor: "rgba(80,80,80, 0.5)",
            }} >
                {entry.termo7} 
            </Text>
            </TouchableOpacity>
            </View>

            <View >
                <TouchableOpacity
                 onPress={() => {
                    onEntryPress8 && onEntryPress8();
                }}>
            <Text style={{
                 fontSize:25,
                 color: entry.termo8cor,
            }} >
                {entry.termo8} 
            </Text>
            </TouchableOpacity>
            </View>

            <View >
                <TouchableOpacity
                 onPress={() => {
                    onEntryPress9 && onEntryPress9();
                }}>
            <Text style={{
                 fontSize:25,
                 color: entry.termo9cor,
            }} >
                {entry.termo9} 
            </Text>
            </TouchableOpacity>
            </View>

            <View >
                <TouchableOpacity
                 onPress={() => {
                    onEntryPress10 && onEntryPress10();
                }}>
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
        //backgroundColor: "rgba(80,80,80, 0.5)",
        marginTop: 0,
        marginBottom: -13,
        padding:-10,
        paddingLeft: 10,
    },
    details1: {
        flex: 1,
        //flexDirection: "row",
        backgroundColor: 'blue',
    },
   
    
});

export default EntryListItem


/*<TouchableOpacity
           
onPress={() => {
    onEntryPress && onEntryPress(entry);
}}>
  
         <Text style={{
            fontSize: 20,
            textAlign: "center",
            color: entry.termo1cor,
    
             }}>{entry.termo1} </Text>
            
   
</TouchableOpacity>*/