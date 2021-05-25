import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

import EntryList from '../../components/EntryList';

import TermoModal from '../../components/TermoModal'

import Menu from '../../components/Menu'
import ExplicaT from '../../components/ExplicaT'
import EntrySummary from '../../components/EntrySummary'
import MenuModal from '../../components/MenuModal'
import Desenvolvimento from '../../components/Desenvolvimento'



import Colors from '../../styles/Colors';

const Treinamento = ({navigation}) => {
  const legenda = {
    id: 1,
    var1text: "(r(t)): ",
    var1num: 12,
    var2text: "(r'(t)): ",
    var2num: 1,
    var3text: "(h(t)): ",
    var3num: 10,
    var4text: "(h'(t)): ",
    var4num: 2,
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

  let taxaaltura = var4num === 0 ? 0.00000000001 : var4num;

 let x1 = ((2*var1num*var2num*var3num)-(2*var1num*var2num*var3num))/(2*var1num*var1num*taxaaltura); 

 let x2 = ((2*var1num*var2num*var3num)+(2*var1num*var2num*var3num))/(2*var1num*var1num*taxaaltura);

 let xv = (x2-x1)/2;
 let yv = (xv*xv*var4num)+(2*xv*var2num*var3num);

 let ymin = ((var1num)*(var1num)*var4num)+(2*(var1num)*var2num*var3num);

 let ymax = (var1num*var1num*var4num)+(2*var1num*var2num*var3num);

 let xmin = (-1*var1num);
 let xmax = var1num;
 /*let raioinicial = 5;
let taxaraio = 1;
let altinicial = 1;
let taxaalt = 1;


let a = 2*raioinicial*raioinicial*taxaalt

let b = 2*raioinicial*taxaraio*altinicial;*/


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
       var1num < 14 ? () => setVar1num(var1num => var1num + 1) :
       setVar1num(13)

      
      }
      onVar1PressMinn={
        
       var1num > 10 ? () => setVar1num(var1num => var1num - 1) :
       setVar1num(11)
      }
    
      onVar2PressAddd={
        
        var2num < 2 ? () => setVar2num(var2num => var2num + 1) :
      setVar2num(1)
      }
      onVar2PressMinn={
        
        var2num > -2 ? () => setVar2num(var2num => var2num - 1) : setVar2num(-1) }


      onVar3PressAddd={
        var3num < 13 ? () => setVar3num(var3num => var3num + 2) :
      setVar3num(12)
      }
      onVar3PressMinn={
        
        var3num > 7 ?  () => setVar3num(var3num => var3num - 2) :
      setVar3num(8)
      }


      onVar4PressAddd={
        
        var4num < 3 ? () => setVar4num(var4num => var4num + 2) :
      setVar4num(2)
      }
      onVar4PressMinn={
        var4num > -3 ? () => setVar4num(var4num => var4num - 2) : setVar4num(-2) }


      />
      <EntryList 
      categoria={categoria}
      var1numero={var1num}
      var2numero={var2num}
      var3numero={var3num}
      var4numero={var4num}

      
      />

      <Desenvolvimento 
      
      />
      <ExplicaT 
      categoria={categoria}
      />
      <EntrySummary 
    var1numero={var1num}
    var2numero={var2num}
    var3numero={var3num}
    var4numero={var4num}

    x1={x1}
    x2={x2}
    xv={xv}
    yv={yv}

    xmin={xmin}
    xmax={xmax}
    ymin={ymin}
    ymax={ymax}

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
