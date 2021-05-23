import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

import EntryList from '../../components/EntryList';

import TermoModal from '../../components/TermoModal'

import Menu from '../../components/Menu'
import ExplicaT from '../../components/ExplicaT'
import EntrySummary from '../../components/EntrySummary'
import MenuModal from '../../components/MenuModal'
import Botão from '../../components/Container/Botão'


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

    const [modalVisible1, setModalVisible1] = useState(false);

    const onClosePress = () => {
       
        setModalVisible1(false);
    };

    console.log('Treinamento:: categoria', categoria);
    console.log('Treinamento:: numero variavel 2', var2num);

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
        var1num,
        var2text,
        var2num,
        var3text,
        var3num,
        var4text,
        var4num,
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

    const onOpenPress = () => {
      setModalVisible1(true);
    }
    const onCategoryPress = item => {
      setCategoria(item.name);
      setModalVisible1(false);
    }

    const onVar1Press = () => {
if (var1num < 12) {
        
        () => setVar1num(var1num => var1num + 1)}
    };

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
       
       < MenuModal 
            isVisible={modalVisible1}
            onCancel={onClosePress}
            onConfirm={onCategoryPress}
            
            />
            

      <Menu

      onMenuPress={onOpenPress}
      onModalClose={modalVisible}

      
      legenda={legendas}

      var1numero={var1num}
      var2numero={var2num}
      var3numero={var3num}
      var4numero={var4num}

// variáveis e botões são enviadas da tela treinamento 
// para a tela menu. então são enviadas diretamente para
// a tele menu list (lista das legendas)
      onVar1PressAddd={

        onVar1Press()
        
      
      }
      onVar1PressMinn={() => setVar1num(var1num => var1num - 1) }
    
      onVar2PressAddd={() => setVar2num(var2num => var2num + 1)  }
      onVar2PressMinn={() => setVar2num(var2num => var2num - 1)  }

      onVar3PressAddd={() => setVar3num(var3num => var3num + 1)  }
      onVar3PressMinn={() => setVar3num(var3num => var3num - 1)  }

      onVar4PressAddd={() => setVar4num(var4num => var4num + 1)  }
      onVar4PressMinn={() => setVar4num(var4num => var4num - 1)  }


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
