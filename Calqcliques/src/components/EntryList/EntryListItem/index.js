import React from 'react'
import {TouchableOpacity,
     View,
     Text,
    StyleSheet } from 'react-native'

import Colors from '../../../styles/Colors'

const EntryListItem = ({entry,onEntryPress}) => {
    return ( 
       
            <TouchableOpacity
            
            onPress={() => {
                onEntryPress && onEntryPress(entry);
            }}>
                <View style={styles.container}>
                     <Text style={{
                        fontSize: 20,
                        textAlign: "center",
                        color: Colors.green,
                
                         }}>{entry.termo1}</Text>
                        <Text 
                        style={{
                         fontSize: 20,
                         textAlign: "center",
                            color: Colors.green,
                
                        }}>Treinamento</Text>
                </View>
            </TouchableOpacity>  

                       
            
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.red,
    },
    
});

export default EntryListItem
