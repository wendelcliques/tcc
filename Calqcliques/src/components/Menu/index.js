import React, {useState} from 'react'
import Svg, {Ellipse, Polygon} from 'react-native-svg'
import { View, Text, StyleSheet } from 'react-native'

import Container from '../Container'
import MenuList from '../MenuList'
import EntryList from '../EntryList'                                                                         
const Menu = () => {
    const legenda = {
        id: 1,
        var1text: "raio inicial da base (r(t)): ",
        var1num: 1,
        var2text: null,
        var2num: null,
        var3text: null,
        var3num: null,
        var4text: null,
        var4num: null,
    };
    const [var1num, setVar1num] = useState(legenda.var1num);



const [var1, setVar1] = useState("54,10 15,62 95,62");
console.log('Menu :: var1num', JSON.stringify(var1));
const points = () => {
    setVar1("54,10 15,62 95,62");
    console.log('Menu :: var1num', JSON.stringify(var1num));
    console.log('Menu :: var1', JSON.stringify(var1));
}

if (var1num === "10" ) {
    points();
} else if (var1num === "12" ) {
    setVar1("54,18 15,62 95,62");
    console.log('Menu :: var1', JSON.stringify(var1));
}

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
            
            setVar1/>
            
            </View>
           
        </Container>
    )
}

export default Menu
