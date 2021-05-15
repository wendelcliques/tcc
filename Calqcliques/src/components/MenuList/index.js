import React, {useState} from 'react'
import { FlatList, TouchableOpacity, View, Text, StyleSheet} from 'react-native'

import {useNavigation} from '@react-navigation/native'

import MenuListItem from './MenuListItem'

const MenuList = () => {
    const legenda = {
        id: 1,
        var1text: null,
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
            <TouchableOpacity
            onPress={() => {
                taxaCone();
            }
        }>
                <Text>Taxa de variação do cone</Text>
            </TouchableOpacity>
            <FlatList
            data={legenda}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => ( 
                <MenuListItem

                legend={item}
            onVar1PressAdd={() => setVar1num(var1num + 1)

            }
            onVar1PressMin={() => setVar1num(var1num - 1)

            }

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
export default MenuList
