import React from 'react'
import {TouchableOpacity,
     View,
     Text,
    StyleSheet } from 'react-native'

import Colors from '../../../styles/Colors'

const EntryListItem = ({entry,onEntryPress}) => {
    return ( 
        
            <View>
            <View style={[styles.container, {
                flexDirection: 'row',
            }]}>
           <View>
            <Text style={styles.termo1}>
                {entry.termo1}
             </Text>
             </View>
           <View>
            <Text style={styles.termo1} >
                {entry.termo2} 
            </Text>
            </View>
           
            </View> 
            </View>

                        
            
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
      //flexDirection: 'row',
        backgroundColor: Colors.red,
    },
    details: {
        flexDirection: "row",
        backgroundColor: 'blue',
    },
    termo1: {
        fontSize: 20,
     
        color: Colors.black,

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