import React from 'react'
import Svg, {Ellipse, Polygon, Line} from 'react-native-svg'
import { View, Text } from 'react-native'

const SvgCone = ({var1numero, var2numero, var3numero, var4numero}) => {

    let var1 = ''; // raio x inicial
    let var2 = ''; // raio y inicial

    let var3 = '';  // altura inicial

    let var4 = ''; // taxa raio x

    let var5 = ''; // taxa raio y

    let var6 = ''; // taxa altura
    // var1numero  raio inicial   11 12 13
    //var2numero taxa do raio   -1 0 1
    //var3numaero altura inicial  8  10  12
    //var4numero taxa da altura  -2 0 2


  
        if (var3numero === 8 && var1numero === 11) {

            if (var4numero === -2 && var2numero === -1) {
                var3 = "54,30 24,84 85,84"; // cone azul min
                var1 = "30"; //base ini x
                var2 = "7"; // base ini y

                var6 = "54,40 34,84 75,84"; // cone amarelo min
                var4 = "20"; //base ini x
                var5 = "5"; // base ini y

            } else if (var4numero === -2 && var2numero === -1) {
                var3 = "54,30 24,82 85,82"; // cone azul min
                var1 = "30"; //base ini x
                var2 = "7"; // base ini y
            }





             
        } 
        
        
        /*else if (var3numero === 10 ) {
             var3 = "54,20 24,82 85,82"; 
        } else if (var3numero === 12) {
             var3 = "54,10 24,82 85,82"; 
        }

        if (var3numero === 8) {
            var2 = "54,18 15,84 95,84";
       } else if (var3numero === 10 ) {
            var2 = "54,10 15,84 95,84"; 
       } else if (var3numero === 12) {
            var2 = "54,00 15,84 95,84"; 
       }*/
   // const var1 = var1
    return (
        <View>
            <Svg height="100" width="100" >
                
                <Polygon
                points={var6}
                stroke="purple"
                strokeWidth="2"
                fill="rgba(99, 99, 00, 1.0)"
                > 
// triangulo amarelo
                </Polygon>
    
             
                <Ellipse // elipse amarela
                    cx="55"
                    cy="85"
                    rx={var4} //{var3}
                    ry={var5} //{var4}
                    stroke="purple"
                    strokeWidth="2"
                    fill="rgba(79, 79, 00, 1.0)"
                />
               

<Polygon
                points= {var3}
                //stroke="purple"
                strokeWidth="2"
                fill="rgba(00, 00, 99, 0.2)"
                >
//triangulo azul
                </Polygon>

                <Line
                x1="84"
                y1="85"
                x2="54"
                y2="30"
                stroke="purple"
                strokeWidth="2"
                />

                <Line
                x1="24"
                y1="84"
                x2="54"
                y2="30"
                stroke="purple"
                strokeWidth="2"
                />      

                <Ellipse // elipse azul
                    cx="55" 
                    cy="85" 
                    rx= {var1}
                    ry= {var2}
                    stroke="purple"
                    strokeWidth="2"
                    strokeWidth="2"
                    fill="rgba(00, 00, 50, 0.7)"
                />
            </Svg>
        </View>
    )
}

export default SvgCone
