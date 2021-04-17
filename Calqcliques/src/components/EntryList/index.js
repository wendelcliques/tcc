import React from 'react'
import { Alert, FlatList, View } from 'react-native'
import {useNavigation} from '@react-navigation/native'

import EntryListItem from './EntryListItem'

import useEntries from '../../hooks/useEntries'


const EntryList = () => {
    const navigation = useNavigation();
    const [entries] = useEntries();

    return (
        <View>
           <FlatList
           data={entries}
           keyExtractor={item => item.id}
           renderItem={({item, index}) => (
               <EntryListItem 
                entry={item}
                onEntryPress={
                    Alert.alert('clicou')
                }
               />
           )}
           />
        </View>
    )
}

export default EntryList
