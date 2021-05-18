import React, {useState} from 'react'
import Svg, {Ellipse, Polygon} from 'react-native-svg'
import { View, Text, StyleSheet } from 'react-native'

import Container from '../Container'
import MenuList from '../MenuList'
import EntryList from '../EntryList'                                                                         
const Menu = ({
    legenda,
    var1numero,
    var2numero,
    var3numero,
    var4numero,
    onVar1PressAddd,
    onVar1PressMinn}) => {
            if (var1numero === 10) {
                const var1 = "54,00 15,62 95,62";
            } else if (var1numero === 11 ) {
                const var1 = "54,10 15,62 95,62"; 
            } else if (var1numero === 12) {
                const var1 = "54,18 15,62 95,62"; 
            }
        const var1 = var1numero === 10? (var1numero === 11 ? "54,18 15,62 95,62"  : "54,10 15,62 95,62" ) : "54,00 15,62 95,62" ;

        console.log('Menu :: var1', JSON.stringify(var1));
        console.log('Menu :: legenda esta', JSON.stringify(legenda));
   // const [var1num, setVar1num] = useState(var1numero);



//const [var1, setVar1] = useState("54,10 15,62 95,62");
//console.log('Menu :: var1num', JSON.stringify(var1numero));
const points = () => {
    setVar1("54,18 15,62 95,62");
    //console.log('Menu :: var1num', JSON.stringify(var1num));
    console.log('Menu :: var1', JSON.stringify(var1));
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
        onPressActionButton={() => {} }
        >
        <View style={{backgroundcolor: "red", 
        flexDirection: 'row'}}>
            <Svg height="100" width="100" >
                
                <Polygon
                points={var1}
                stroke="purple"
                strokeWidth="2"
                fill="rgba(99, 99, 00, 1.0)"
                >

                </Polygon>
    
   
                <Ellipse
                    cx="55"
                    cy="65"
                    rx="40"
                    ry="10"
                    stroke="purple"
                    strokeWidth="2"
                    fill="rgba(79, 79, 00, 1.0)"
                />

<Polygon
                points="54,0 24,62 85,62"
                stroke="purple"
                strokeWidth="2"
                fill="rgba(00, 00, 99, 0.2)"
                >

                </Polygon>
                <Ellipse
                    cx="55"
                    cy="65"
                    rx="30"
                    ry="7"
                    stroke="purple"
                    strokeWidth="2"
                    fill="rgba(00, 00, 50, 01.0)"
                />
            </Svg>
            
          
            <MenuList 
            legenda={legenda}
            onVar1PressAddd={onVar1PressAddd}
            onVar1PressMinn={onVar1PressMinn}
            var1Numero={var1numero}
            var2Numero={var2numero}
            var3Numero={var3numero}
            var4Numero={var4numero}
            
            />
            
            </View>
           
        </Container>
    )
}

export default Menu
