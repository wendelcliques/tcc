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
              
                     <Text style={{
                        fontSize: 20,
                        textAlign: "center",
                        color: entry.termo1cor,
                
                         }}>{entry.termo1} </Text>
                        <Text 
                        style={{
                         fontSize: 20,
                         textAlign: "center",
                            color: Colors.green,
                
                        }}>Treinamento</Text>
               
            </TouchableOpacity>  

                       
            
    );
};

const styles = StyleSheet.create({
    container: {
       // flex: 1,
       // backgroundColor: Colors.red,
    },
    
});

export default EntryListItem
