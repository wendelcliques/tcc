import React from 'react'
import Svg, {Ellipse, Polygon} from 'react-native-svg'
import { View, Text } from 'react-native'

const SvgCone = ({var1numero, var2numero, var3numero, var4numero}) => {

    let var1 = ''; 
    let var2 = '';

    let var3 = '';

    let var4 = '';


  
        if (var1numero === 11 ) {
             var1 = "54,30 24,82 85,82";
        } else if (var1numero === 12 ) {
             var1 = "54,20 24,82 85,82"; 
        } else if (var1numero === 13) {
             var1 = "54,10 24,82 85,82"; 
        }

        if (var3numero === 8) {
            var2 = "54,18 15,82 95,82";
       } else if (var3numero === 10 ) {
            var2 = "54,10 15,82 95,82"; 
       } else if (var3numero === 12) {
            var2 = "54,00 15,82 95,82"; 
       }
   // const var1 = var1
    return (
        <View>
            <Svg height="100" width="100" >
                
                <Polygon
                points={var2}
                stroke="purple"
                strokeWidth="2"
                fill="rgba(99, 99, 00, 1.0)"
                > 
// triangulo amarelo
                </Polygon>
    
             
                <Ellipse // elipse amarela
                    cx="55"
                    cy="85"
                    rx="40"
                    ry="10"
                    stroke="purple"
                    strokeWidth="2"
                    fill="rgba(79, 79, 00, 1.0)"
                />
               

<Polygon
                points= {var1}
                stroke="purple"
                strokeWidth="2"
                fill="rgba(00, 00, 99, 0.2)"
                >
//triangulo azul
                </Polygon>
                <Ellipse // elipse azul
                    cx="55"
                    cy="85"
                    rx="30"
                    ry="7"
                    stroke="purple"
                    strokeWidth="2"
                    fill="rgba(00, 00, 50, 01.0)"
                />
            </Svg>
        </View>
    )
}

export default SvgCone
