import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

import EntryList from '../../components/EntryList';

import TermoModal from '../../components/TermoModal'

import Menu from '../../components/Menu'
import ExplicaT from '../../components/ExplicaT'
import EntrySummary from '../../components/EntrySummary'



import Colors from '../../styles/Colors';

const Treinamento = ({navigation}) => {
  const legenda = {
    id: 1,
    var1text: "(r(t)): ",
    var1num: 9,
    var2text: "(r²(t)): ",
    var2num: 10,
    var3text: "(h(t)): ",
    var3num: 2,
    var4text: "(h(t)): ",
    var4num: 1,
};
const [legendas, setLegendas] = useState([]);
const [var1text, setVar1text] = useState(legenda.var1text);
    const [var1num, setVar1num] = useState(legenda.var1num);
    const [var2text, setVar2text] = useState(legenda.var2text);
    const [var2num, setVar2num] = useState(legenda.var2num);
    const [var3text, setVar3text] = useState(legenda.var3text);
    const [var3num, setVar3num] = useState(legenda.var3num);
    const [var4text, setVar4text] = useState(legenda.var4text);
    const [var4num, setVar4num] = useState(legenda.var4num);

    const [categoria, setCategoria] = useState("Bem vindo");


    const [modalVisible, setModalVisible] = useState(false);

    console.log('Treinamento:: categoria', categoria);

    useEffect(() => {
      AsyncStorage.getItem("legendas").then(data => {
        if(data) {
          const legenda = JSON.parse(data);
          setLegendas(legenda);
        }
      })
    }, []);

    console.log("legendas", legendas);

    const onSave = async () => {
      const id = Math.random(5000).toString();
      const data = {
        id,
        var1text,
        var2text,
        var3text,
        var4text,
      };

      legendas.push(data);
      await AsyncStorage.setItem('legendas', JSON.stringify(legendas));
      console.log("legendas", legendas);
    }

    const onDelete = async () => {
      try {
        await AsyncStorage.removeItem('legendas');
        console.log('Treinamento:: delet storage erro', legendas);
      }catch (error) {
        console.log('Treinamento:: delet storage erro', error.message);
        
      }
    }

    const onCategoryPress = item => {
      setCategoria(item.name);
      setModalVisible(false);
    }

  return (
    <View style={styles.container}>
       
       <TouchableOpacity
       onPress={onSave} >
         <Text>Salvar</Text>
       </TouchableOpacity>
       <TouchableOpacity
       onPress={onDelete} >
         <Text>Deletar</Text>
       </TouchableOpacity>
      <Menu

      onModalClose={modalVisible}

      onConfirm={onCategoryPress}
      legenda={legendas}

      var1numero={var1num}
      var2numero={var2num}
      var3numero={var3num}
      var4numero={var4num}


      onVar1PressAddd={() => setVar1num(var1num => var1num + 1) }
      onVar1PressMinn={() => setVar1num(var1num => var1num - 1) }
    
      onVar2PressAdd={() => setVar2num(var2num => var2num + 1)  }
      onVar2PressMin={() => setVar2num(var2num => var2num - 1)  }

      onVar3PressAdd={() => setVar3num(var3num => var3num + 1)  }
      onVar3PressMin={() => setVar3num(var3num => var3num - 1)  }

      onVar4PressAdd={() => setVar4num(var4num => var4num + 1)  }
      onVar4PressMin={() => setVar4num(var4num => var4num - 1)  }


      />
      <EntryList 
      categoria={categoria}
      var1numero={var1num}
      var2numero={var2num}
      var3numero={var3num}
      var4numero={var4num}

      
      />
      <ExplicaT 
      categoria={categoria}
      />
      <EntrySummary 
      var1numero={var1num}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.metal,

  }
})

export default Treinamento
