import React from 'react'
import { Alert, FlatList, View, Text, StyleSheet } from 'react-native'
import {useNavigation} from '@react-navigation/native'

import EntryListItem from './EntryListItem'

import useEntries from '../../hooks/useEntries'

import Colors from '../../styles/Colors'


const EntryList = () => {
    const navigation = useNavigation();
    const [entries] = useEntries();

    return (
        <View style={styles.container}>
           <FlatList
           data={entries}
           keyExtractor={item => item.id}
           renderItem={({item, index}) => (
            <EntryListItem 
            entry={item}
            onEntryPress={ () => {}
                //Alert.alert('clicou')
            }
            />
           )}
           />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.red,
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