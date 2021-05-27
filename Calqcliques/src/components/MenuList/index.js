
import React, {useEffect, useState} from 'react'
import { Alert, FlatList, View, Text, StyleSheet } from 'react-native'
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

   

    return (
        <View style={styles.container}>
        {desenvolvimento && (
           <FlatList
           data={legenda}
           keyExtractor={item => item.toString()}
           
           renderItem={({item, index}) => (
           
         
           <MenuListItem 
            
            entry={item}

                 Var1Numero={var1Numero}
                 Var2Numero={var2Numero}
                 Var3Numero={var3Numero}
                 Var4Numero={var4Numero}

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
                  


           />

            
            
           )}
           />
           )}
           <TermoModal 
           isVisible={modalVisible}
           onCancel={onClosePress}
           entry={entries.termo1definicao}

           />
              
              </View> 
    )
}
const styles = StyleSheet.create({
    container: {
       flex: 1,
        //backgroundColor: Colors.red,
        padding: 6,
    },
    
});

export default MenuList