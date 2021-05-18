import React, {useEffect, useState} from 'react'
import { Alert, FlatList, View, Text, StyleSheet } from 'react-native'
import {useNavigation} from '@react-navigation/native'

import EntryListItem from './EntryListItem'

import useEntries from '../../hooks/useEntries'

import Colors from '../../styles/Colors'
import TermoModal from '../TermoModal'


const EntryList = () => {
    const navigation = useNavigation();
    const [entries] = useEntries();

    const [modalVisible, setModalVisible] = useState(false);

    const onClosePress = () => {
        setModalVisible(false);
    };

    //console.log('EntryList :: entries', JSON.stringify(entries));

    return (
        <View>
        
           <FlatList
           data={entries}
           keyExtractor={item => item.id}
           
           renderItem={({item, index}) => (
            /*<Text style={{
                fontSize: 20,
                //textAlign: "center",
                color: Colors.green,
        
                 }}>{item.id}</Text>*/
         
           <EntryListItem 
            
            entry={item}
            onEntryPress={ () => {
                setModalVisible(true);
            }}
            />

            
            
           )}
           />

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

export default EntryList
/*
<EntryListItem 
entry={item}
onEntryPress={ () => {}
    //Alert.alert('clicou')
}
/>*/