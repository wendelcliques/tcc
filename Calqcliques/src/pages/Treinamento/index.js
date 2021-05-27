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
 /* const legenda = {
    id: 1,
    var1text: "(r(t)): ",
    var1num: 12,
    var2text: "(r'(t)): ",
    var2num: 1,
    var3text: "(h(t)): ",
    var3num: 10,
    var4text: "(h'(t)): ",
    var4num: 2,
};*/

    let var1textc =  "(r(t)): ";
    let var1numc =  12;
    let var2textc = "(r'(t)): ";
    let var2numc = 1;
    let var3textc = "(h(t)): ";
   let var3numc = 10;
    let var4textc = "(h'(t)): ";
    let var4numc = 2;

const [legendas, setLegendas] = useState([]);
const [var1text, setVar1text] = useState(var1textc);
    const [var1num, setVar1num] = useState(var1numc);
    const [var2text, setVar2text] = useState(var2textc);
    const [var2num, setVar2num] = useState(var2numc);
    const [var3text, setVar3text] = useState(var3textc);
    const [var3num, setVar3num] = useState(var3numc);
    const [var4text, setVar4text] = useState(var4textc);
    const [var4num, setVar4num] = useState(var4numc);

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


 let yminmeio = ((0.5*var1num)*(0.5*var1num)*var4num)+(2*(0.5*var1num)*var2num*var3num);

 let ymaxmeio = ((0.5*var1num)*(0.5*var1num)*var4num)+(2*(0.5*var1num)*var2num*var3num);

 let xmin = (-1*var1num);
 let xmax = var1num;

 let dtaxa = (2*var1num);


 let xtaxa = ymax/(var1num*10);
 let xminmeio = 0.5*xmin;
 let xmaxmeio = 0.5*xmax;

 let arit1 = 2*var1num*var2num*var3num;

 let arit2 = var1num*var1num*var4num;

let arit3 = arit1+ arit2;


let vT = "v'(t) indica que está sendo derivado o volume em relação ao tempo.";

let tombo = "O número 2 multiplicando significa que foi aplicado a regra do tombo na variável que estava elevada ao quadrado. ";

let raioini = "Esse valor corresponde ao valor atual do raio inicial do cone.";

let raiotaxa = "Esse valor corresponde a taxa de variação atual do raio do cone.";

let altura = "Esse valor corresponde a altura inicial atual do cone.";
let alturataxa = "Esse valor corresponde a taxa de variação atual da altura do cone.";
let pmdas = "Foi aplicado a regra de PMDAS, que consiste em definir a prioridade aritmética das operaçãoes em uma expressão.";

 /*let raioinicial = 5;
let taxaraio = 1;
let altinicial = 1;
let taxaalt = 1;


let a = 2*raioinicial*raioinicial*taxaalt

let b = 2*raioinicial*taxaraio*altinicial;*/

const desenvolvimento = (categoria === "taxa de variação");

console.log("treinamento:: desenvolvimento", desenvolvimento)


  return (
    
    <View style={styles.container}>
       
      
       
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

      desenvolvimento={desenvolvimento}

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

      arit1={arit1}
      arit2={arit2}
      />

      {desenvolvimento && (
       <Desenvolvimento 
       categoria={categoria}
       var1numero={var1num}
       var2numero={var2num}
       var3numero={var3num}
       var4numero={var4num}
 
       arit1={arit1}
       arit2={arit2}
       arit3={arit3}

       vT={vT}
       tombo={tombo}
       raioini={raioini}
       raiotaxa={raiotaxa}
       altura={altura}
       alturataxa={alturataxa}
       pmdas={pmdas}
       
       />
       )}

      
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

    xminmeio={xminmeio}
    xmaxmeio={xmaxmeio}
    yminmeio={yminmeio}
    ymaxmeio={ymaxmeio}

    xtaxa={xtaxa}

    desenvolvimento={desenvolvimento}

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

/*
<TouchableOpacity
onPress={onSave} >
  <Text>Salvar</Text>
</TouchableOpacity>
<TouchableOpacity
onPress={onDelete} >
  <Text>Deletar</Text>
</TouchableOpacity>*/