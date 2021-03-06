import React, {useState} from 'react'
import Svg, {Ellipse, Polygon} from 'react-native-svg'
import { View, Text, StyleSheet } from 'react-native'

//import MenuModal from '../MenuModal'
import Container from '../Container'
import MenuList from '../MenuList'
import EntryList from '../EntryList'  
import SvgCone from '../SvgCone'



const Menu = ({
    menumodo,
    onModoPress,
    onMenuPress,
    legenda,
    var1numero,
    var2numero,
    var3numero,
    var4numero,
    
var1text,
var2text,
var3text,
var4text,

    onVar1PressAddd,
    onVar1PressMinn,
    onVar2PressAddd,
    onVar2PressMinn,
    onVar3PressAddd,
    onVar3PressMinn,
    onVar4PressAddd,
    onVar4PressMinn,

    desenvolvimento,

}) => {

       
const desenvolvimentomenu = desenvolvimento;
        const onCategoryPress = () => {
           // onClosePress();
        };
        

            

      
        console.log('Menu :: legenda esta', JSON.stringify(legenda));

        console.log('Menu :: legenda variável 2', var2numero);

        console.log('Menu :: botão 2', onVar2PressAddd );

       // console.log('Menu:: onConfirm', onConfirm)
       // console.log('Menu:: onmodalclose', onModalClose)
   // const [var1num, setVar1num] = useState(var1numero);



//const [var1, setVar1] = useState("54,10 15,62 95,62");
//console.log('Menu :: var1num', JSON.stringify(var1numero));
const points = () => {
    setVar1("54,18 15,62 95,62");
    //console.log('Menu :: var1num', JSON.stringify(var1num));
  
}

/*if (var1numero === 10 ) {
    setVar1("54,18 15,62 95,62");
} else if (var1numero === 12 ) {
    setVar1("54,18 15,62 95,62");
    console.log('Menu :: var1', JSON.stringify(var1));
}*/

    return (
        <Container
        title="Menu"
        onPressActionButton={
            onMenuPress
         } // recebe o botão do container e seta true o modal visible do MenuModal
         onModoPress={onModoPress}
         menumodo={menumodo}
        >
        <View style={{backgroundcolor: "red", 
        flexDirection: 'row'}}>
            
            
{desenvolvimentomenu && (
<SvgCone 


var1numero={var1numero}
var2numero={var2numero}
var3numero={var3numero}
var4numero={var4numero}

/>
)}
            
          
            <MenuList 
            legenda={legenda}
            onVar1PressAddd={onVar1PressAddd}
            onVar1PressMinn={onVar1PressMinn}
            onVar2PressAddd={onVar2PressAddd}
            onVar2PressMinn={onVar2PressMinn}
            onVar3PressAddd={onVar3PressAddd}
            onVar3PressMinn={onVar3PressMinn}
            onVar4PressAddd={onVar4PressAddd}
            onVar4PressMinn={onVar4PressMinn}
            var1Numero={var1numero}
            var2Numero={var2numero}
            var3Numero={var3numero}
            var4Numero={var4numero}

            var1text={var1text}
    var2text={var2text}
    var3text={var3text}
    var4text={var4text}

            desenvolvimento={desenvolvimento}
            
            />

           
            
            </View>
           
        </Container>
    )
}

export default Menu
