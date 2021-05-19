import React, {useEffect, useState} from 'react'
import { Alert, FlatList, View, Text, StyleSheet } from 'react-native'
import {useNavigation} from '@react-navigation/native'

import EntryListItem from './EntryListItem'

import useEntries from '../../hooks/useEntries'

import Colors from '../../styles/Colors'
import TermoModal from '../TermoModal'


const EntryList = ({var1numero,
var2numero,
var3numero,
var4numero
}) => {
    const navigation = useNavigation();
    const [entries] = useEntries();

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
    };

    //console.log('EntryList :: entries', JSON.stringify(entries));

    return (
        <View>
        
           <FlatList
           data={entries}
           keyExtractor={item => item.id}
           
           renderItem={({item, index}) => (
        
         
           <EntryListItem 
            
            entry={item}

            Var1Numero={var1numero}
            Var2Numero={var2numero}
            var3Numero={var3numero}
            var4Numero={var4numero}


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

export default EntryList
/*
<EntryListItem 
entry={item}
onEntryPress={ () => {}
    //Alert.alert('clicou')
}
/>*/