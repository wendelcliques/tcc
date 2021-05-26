import React, {useState} from 'react'
import {TouchableOpacity,
     View,
     Text,
    StyleSheet } from 'react-native'

const DesenItem = ({entry,
    var1numero,
    var2numero,
    var3numero,
    var4numero,
arit1
}) => {

    console.log("Desenitem:: entry", entry);
    return (
      
            <>
            <View style={{
                 //backgroundColor: 'blue',
       // marginTop: 40,
       // marginBottom: 0,
        //padding:-10,
        paddingLeft: 10,
                flexDirection: 'row',
                
                fontSize:15,
                color: entry.termo2cor,
               // backgroundColor: "rgba(80,80,80, 0.5)",
            }}>

 

            <View >
               <TouchableOpacity
               onPress={() => {
                   onEntryPress && onEntryPress();
               }}
               >
            <Text style={{
                fontSize:15,
                color: entry.termo1dcor,
                backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                //{entry.termo1dd}
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
                color: entry.termo2dcor,
                backgroundColor: "rgba(80,80,80, 0.5)",
            }} >
                {entry.termo2d} {var1numero} {entry.termo2dop}
            </Text>
            </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity
                 onPress={() => {
                    onEntryPress3 && onEntryPress3();
                }}
                >
            
            </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity
                
                onPress={() => {
                    onEntryPress4 && onEntryPress4();
                }}>
            <Text style={{
                 fontSize:15,
                 color: entry.termo3dcor,
                 backgroundColor: "rgba(80,80,80, 0.5)",
            }} >
                {var2numero} {entry.termo2dop}
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
                 color: entry.termo4dcor,
                 backgroundColor: "rgba(80,80,80, 0.5)",
            }} >
                {var3numero}{entry.termo3dop}
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
                 color: entry.termo2dcor,
                 backgroundColor: "rgba(80,80,80, 0.5)",
            }} >
                {var1numero}² {entry.termo2dop}
            </Text>
            </TouchableOpacity>
            </View>



            <View >
                <TouchableOpacity
                 onPress={() => {
                    onEntryPress7 && onEntryPress7();
                }}>
            <Text style={{
                 fontSize:15,
                 color: entry.termo5dcor,
                 backgroundColor: "rgba(80,80,80, 0.5)",
            }} >
                {var4numero} 
            </Text>
            </TouchableOpacity>
            </View>

           

            

           





            </View>







<View style={{
                 //backgroundColor: 'blue',
       // marginTop: 40,
       // marginBottom: 0,
        //padding:-10,
        paddingLeft: 10,
                flexDirection: 'row',
                
                fontSize:15,
                color: entry.termo2cor,
               // backgroundColor: "rgba(80,80,80, 0.5)",
            }}>

 

            <View >
               <TouchableOpacity
               onPress={() => {
                   onEntryPress && onEntryPress();
               }}
               >
            <Text style={{
                fontSize:15,
                color: entry.termo1dcor,
                backgroundColor: "rgba(80,80,80, 0.5)",
            }}>
                {entry.termo1d}
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
                color: entry.termo2dcor,
                backgroundColor: "rgba(80,80,80, 0.5)",
            }} >
                {entry.termo2d} {var1numero} {entry.termo2dop}
            </Text>
            </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity
                 onPress={() => {
                    onEntryPress3 && onEntryPress3();
                }}
                >
            
            </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity
                
                onPress={() => {
                    onEntryPress4 && onEntryPress4();
                }}>
            <Text style={{
                 fontSize:15,
                 color: entry.termo3dcor,
                 backgroundColor: "rgba(80,80,80, 0.5)",
            }} >
                {var2numero} {entry.termo2dop}
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
                 color: entry.termo4dcor,
                 backgroundColor: "rgba(80,80,80, 0.5)",
            }} >
                {var3numero}{entry.termo3dop}
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
                 color: entry.termo2dcor,
                 backgroundColor: "rgba(80,80,80, 0.5)",
            }} >
                {var1numero}² {entry.termo2dop}
            </Text>
            </TouchableOpacity>
            </View>



            <View >
                <TouchableOpacity
                 onPress={() => {
                    onEntryPress7 && onEntryPress7();
                }}>
            <Text style={{
                 fontSize:15,
                 color: entry.termo5dcor,
                 backgroundColor: "rgba(80,80,80, 0.5)",
            }} >
                {var4numero} 
            </Text>
            </TouchableOpacity>
            </View>

            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
     // flexDirection: 'row',
        //backgroundColor: Colors.red,
        //backgroundColor: "rgba(80,80,80, 0.5)",
        marginTop: 0,
        marginBottom: -13,
        padding:-10,
        paddingLeft: 10,
    },
    details1: {
        flex: 1,
        flexDirection: "row",
        //backgroundColor: 'blue',
        marginTop: -3,
        //marginBottom: 0,
        //padding:-10,
        paddingLeft: 10,
    },
   
    
});
export default DesenItem
