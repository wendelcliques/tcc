/*import React, {useState} from 'react'
import { FlatList, TouchableOpacity, View, Text, StyleSheet} from 'react-native'

import {useNavigation} from '@react-navigation/native'

import MenuListItem from './MenuListItem'

const MenuList = () => {
    const legenda = {
        id: 1,
        var1text: "raio inicial da base (r(t)): ",
        var1num: null,
        var2text: null,
        var2num: null,
        var3text: null,
        var3num: null,
        var4text: null,
        var4num: null,
    };

    const [var1text, setVar1text] = useState(legenda.var1text);
    const [var1num, setVar1num] = useState(legenda.var1num);
    const [var2text, setVar2text] = useState(legenda.var2text);
    const [var2num, setVar2num] = useState(legenda.var2num);
    const [var3text, setVar3text] = useState(legenda.var3text);
    const [var3num, setVar3num] = useState(legenda.var3num);
    const [var4text, setVar4text] = useState(legenda.var4text);
    const [var4num, setVar4num] = useState(legenda.var4num);

    console.log('MenuList :: legenda', JSON.stringify(legenda));

    const taxaCone = () => {
        setVar1text("raio inicial da base (r(t)): ");
        setVar1num(10);
        setVar2text("taxa de variação da base (r(t)): ");
        setVar2num(2);
        setVar3text("altura inicial do cone (h(t)): ");
        setVar3num(10);
        setVar4text("taxa de variação do cone (h(t)): ");
        setVar4num(1);
    }
    return (
        <View>
            
                
            <FlatList
            data={legenda}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => ( 
                <MenuListItem

                legenda={item}
            onVar1PressAdd={() => setVar1num(var1num + 1) }
            onVar1PressMin={() => setVar1num(var1num - 1) }

            onVar2PressAdd={() => setVar1num(var2num + 1)

            }
            onVar2PressMin={() => setVar1num(var2num - 1)

            }

            onVar3PressAdd={() => setVar1num(var3num + 1)

            }
            onVar3PressMin={() => setVar1num(var3num - 1)

            }

            onVar4PressAdd={() => setVar1num(var4num + 1)

            }
            onVar4PressMin={() => setVar1num(var4num - 1)

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
        //backgroundColor: Colors.red,
        padding: 6,
    },
    
});
export default MenuList */





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
var1Numero,
var2Numero,
var3Numero,
var4Numero
}) => {

   
    
    

    const navigation = useNavigation();
    const [entries] = useEntries();

    const [modalVisible, setModalVisible] = useState(false);

    const onClosePress = () => {
        setModalVisible(false);
    };
    console.log('MenuList :: var1num', JSON.stringify(var1Numero));

    console.log('MenuList :: legenda', JSON.stringify(legenda));

   

    return (
        <View>
        
           <FlatList
           data={legenda}
           keyExtractor={item => item.toString()}
           
           renderItem={({item, index}) => (
            /*<Text style={{
                fontSize: 20,
                //textAlign: "center",
                color: Colors.green,
        
                 }}>{item.id}</Text>*/
                // <Text>{`${item}`}</Text>
         
           <MenuListItem 
            
            entry={item}

                 Var1Numero={var1Numero}
                 Var2Numero={var2Numero}
                 var3Numero={var3Numero}
                 var4Numero={var4Numero}

            onEntryPress={ () => {
               setModalVisible(true);
            }}

            onVar1PressAdd={onVar1PressAddd }
            onVar1PressMin={onVar1PressMinn }
          
            onVar2PressAdd={() => setVar1num(var2num => var2num + 1)  }
            onVar2PressMin={() => setVar1num(var2num => var2num - 1)  }

            onVar3PressAdd={() => setVar1num(var3num => var3num + 1)  }
            onVar3PressMin={() => setVar1num(var3num => var3num - 1)  }

            onVar4PressAdd={() => setVar1num(var4num => var4num + 1)  }
            onVar4PressMin={() => setVar1num(var4num => var4num - 1)  }

           


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

export default MenuList