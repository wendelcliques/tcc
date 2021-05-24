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

    let var7 =''; //base amarela direita

    let var8 = ''; // altura amarela direita

    let var9 =''; //base amarela esquerda

    let var10 = ''; // altura amarela esquerda

    // var1numero  raio inicial   11 12 13
    //var2numero taxa do raio   -1 0 1
    //var3numaero altura inicial  8  10  12
    //var4numero taxa da altura  -2 0 2


  
        if (var3numero === 8 && var1numero === 11) {

            if (var4numero === -2 && var2numero === -1) {
                var3 = "54,30 24,84 85,84"; // cone azul min
                var1 = "30"; //base ini x
                var2 = "7"; // base ini y

                var7 = "84";// base azul direita
                var8 = "30";//altura azul direita
                var9 = "24";// base azul esquerdo
                var10 = "30";//altura azul esquerdo

                var6 = "54,40 34,84 75,84"; // cone amarelo min
                var4 = "20"; //base ini x
                var5 = "5"; // base ini y

            } else if (var4numero === -2 && var2numero === 0) {
                var3 = "54,30 24,84 85,84"; // cone azul min
                var1 = "30"; //base ini x
                var2 = "7"; // base ini y

                var7 = "84";// base azul direita
                var8 = "30";//altura azul direita
                var9 = "24";// base azul esquerdo
                var10 = "30";//altura azul esquerdo

                var6 = "54,40 24,84 85,84"; // cone amarelo min
                var4 = "30"; //base ini x
                var5 = "7"; // base ini y

            } else if (var4numero === -2 && var2numero === 1) {
                var3 = "54,30 24,84 85,84"; // cone azul min
                var1 = "30"; //base ini x
                var2 = "7"; // base ini y

                var7 = "84";// base azul direita
                var8 = "30";//altura azul direita
                var9 = "24";// base azul esquerdo
                var10 = "30";//altura azul esquerdo

                var6 = "54,40 14,84 95,84"; // cone amarelo min
                var4 = "40"; //base ini x
                var5 = "10"; // base ini y

            } else if (var4numero === 0 && var2numero === -1) {
                var3 = "54,30 24,84 85,84"; // cone azul min
                var1 = "30"; //base ini x
                var2 = "7"; // base ini y

                var7 = "84";// base azul direita
                var8 = "30";//altura azul direita
                var9 = "24";// base azul esquerdo
                var10 = "30";//altura azul esquerdo

                var6 = "54,30 34,84 75,84"; // cone amarelo min
                var4 = "20"; //base ini x
                var5 = "5"; // base ini y
            } else if (var4numero === 0 && var2numero === 0) {
                var3 = "54,30 24,84 85,84"; // cone azul min
                var1 = "30"; //base ini x
                var2 = "7"; // base ini y

                var7 = "84";// base azul direita
                var8 = "30";//altura azul direita
                var9 = "24";// base azul esquerdo
                var10 = "30";//altura azul esquerdo

                var6 = "54,30 24,84 85,84"; // cone amarelo min
                var4 = "30"; //base ini x
                var5 = "7"; // base ini y
            } else if (var4numero === 0 && var2numero === 1) {
                var3 = "54,30 24,84 85,84"; // cone azul min
                var1 = "30"; //base ini x
                var2 = "7"; // base ini y

                var7 = "84";// base azul direita
                var8 = "30";//altura azul direita
                var9 = "24";// base azul esquerdo
                var10 = "30";//altura azul esquerdo

                var6 = "54,30 14,84 95,84"; // cone amarelo min
                var4 = "40"; //base ini x
                var5 = "10"; // base ini y
            } else if (var4numero === 2 && var2numero === -1) {
                var3 = "54,30 24,84 85,84"; // cone azul min
                var1 = "30"; //base ini x
                var2 = "7"; // base ini y

                var7 = "84";// base azul direita
                var8 = "30";//altura azul direita
                var9 = "24";// base azul esquerdo
                var10 = "30";//altura azul esquerdo

                var6 = "54,20 34,84 75,84"; // cone amarelo min
                var4 = "20"; //base ini x
                var5 = "5"; // base ini y
            } else if (var4numero === 2 && var2numero === 0) {
                var3 = "54,30 24,84 85,84"; // cone azul min
                var1 = "30"; //base ini x
                var2 = "7"; // base ini y

                var7 = "84";// base azul direita
                var8 = "30";//altura azul direita
                var9 = "24";// base azul esquerdo
                var10 = "30";//altura azul esquerdo

                var6 = "54,20 24,84 85,84"; // cone amarelo min
                var4 = "30"; //base ini x
                var5 = "7"; // base ini y
            } else if (var4numero === 2 && var2numero === 1) {
                var3 = "54,30 24,84 85,84"; // cone azul min
                var1 = "30"; //base ini x
                var2 = "7"; // base ini y

                var7 = "84";// base azul direita
                var8 = "30";//altura azul direita
                var9 = "24";// base azul esquerdo
                var10 = "30";//altura azul esquerdo

                var6 = "54,20 14,84 95,84"; // cone amarelo min
                var4 = "40"; //base ini x
                var5 = "10"; // base ini y
            }             
        } 

        if (var3numero === 8 && var1numero === 12) {

            if (var4numero === -2 && var2numero === -1) {
                var3 = "54,30 14,84 95,84"; // cone azul min
                var1 = "40"; //base ini x
                var2 = "10"; // base ini y

                var7 = "94";// base azul direita
                var8 = "30";//altura azul direita
                var9 = "14";// base azul esquerdo
                var10 = "30";//altura azul esquerdo

                var6 = "54,40 24,84 85,84"; // cone amarelo min
                var4 = "30"; //base ini x
                var5 = "7"; // base ini y
            } else if (var4numero === -2 && var2numero === 0) {
                var3 = "54,30 14,84 95,84"; // cone azul min
                var1 = "40"; //base ini x
                var2 = "10"; // base ini y

                var7 = "94";// base azul direita
                var8 = "30";//altura azul direita
                var9 = "14";// base azul esquerdo
                var10 = "30";//altura azul esquerdo

                var6 = "54,40 14,84 95,84"; // cone amarelo min
                var4 = "40"; //base ini x
                var5 = "10"; // base ini y
            } else if (var4numero === -2 && var2numero === 1) {
                var3 = "54,30 14,84 95,84"; // cone azul min
                var1 = "40"; //base ini x
                var2 = "10"; // base ini y

                var7 = "94";// base azul direita
                var8 = "30";//altura azul direita
                var9 = "14";// base azul esquerdo
                var10 = "30";//altura azul esquerdo

                var6 = "54,40 4,84 105,84"; // cone amarelo min
                var4 = "50"; //base ini x
                var5 = "13"; // base ini y
            } else if (var4numero === 0 && var2numero === -1) {
                var3 = "54,30 14,84 95,84"; // cone azul min
                var1 = "40"; //base ini x
                var2 = "10"; // base ini y

                var7 = "94";// base azul direita
                var8 = "30";//altura azul direita
                var9 = "14";// base azul esquerdo
                var10 = "30";//altura azul esquerdo

                var6 = "54,30 24,84 85,84"; // cone amarelo min
                var4 = "30"; //base ini x
                var5 = "7"; // base ini y
            } else if (var4numero === 0 && var2numero === 0) {
                var3 = "54,30 14,84 95,84"; // cone azul min
                var1 = "40"; //base ini x
                var2 = "10"; // base ini y

                var7 = "94";// base azul direita
                var8 = "30";//altura azul direita
                var9 = "14";// base azul esquerdo
                var10 = "30";//altura azul esquerdo

                var6 = "54,30 14,84 95,84"; // cone amarelo min
                var4 = "40"; //base ini x
                var5 = "10"; // base ini y
            } else if (var4numero === 0 && var2numero === 1) {
                var3 = "54,30 14,84 95,84"; // cone azul min
                var1 = "40"; //base ini x
                var2 = "10"; // base ini y

                var7 = "94";// base azul direita
                var8 = "30";//altura azul direita
                var9 = "14";// base azul esquerdo
                var10 = "30";//altura azul esquerdo

                var6 = "54,30 4,84 105,84"; // cone amarelo min
                var4 = "50"; //base ini x
                var5 = "13"; // base ini y
            } else if (var4numero === 2 && var2numero === -1) {
                var3 = "54,30 14,84 95,84"; // cone azul min
                var1 = "40"; //base ini x
                var2 = "10"; // base ini y

                var7 = "94";// base azul direita
                var8 = "30";//altura azul direita
                var9 = "14";// base azul esquerdo
                var10 = "30";//altura azul esquerdo

                var6 = "54,20 24,84 85,84"; // cone amarelo min
                var4 = "30"; //base ini x
                var5 = "7"; // base ini y
            } else if (var4numero === 2 && var2numero === 0) {
                var3 = "54,30 14,84 95,84"; // cone azul min
                var1 = "40"; //base ini x
                var2 = "10"; // base ini y

                var7 = "94";// base azul direita
                var8 = "30";//altura azul direita
                var9 = "14";// base azul esquerdo
                var10 = "30";//altura azul esquerdo

                var6 = "54,20 14,84 95,84"; // cone amarelo min
                var4 = "40"; //base ini x
                var5 = "10"; // base ini y
            } else if (var4numero === 2 && var2numero === 1) {
                var3 = "54,30 14,84 95,84"; // cone azul min
                var1 = "40"; //base ini x
                var2 = "10"; // base ini y

                var7 = "94";// base azul direita
                var8 = "30";//altura azul direita
                var9 = "14";// base azul esquerdo
                var10 = "30";//altura azul esquerdo

                var6 = "54,20 4,84 105,84"; // cone amarelo min
                var4 = "50"; //base ini x
                var5 = "13"; // base ini y
            }  
 
 
        }




        if (var3numero === 8 && var1numero === 13) {
            if (var4numero === -2 && var2numero === -1) {
                var3 = "54,30 4,84 105,84"; // cone azul min
                var1 = "50"; //base ini x
                var2 = "13"; // base ini y

                var7 = "104";// base azul direita
                var8 = "30";//altura azul direita
                var9 = "4";// base azul esquerdo
                var10 = "30";//altura azul esquerdo

                var6 = "54,40 14,84 95,84"; // cone amarelo min
                var4 = "40"; //base ini x
                var5 = "10"; // base ini y
            } else if (var4numero === -2 && var2numero === -1) {
                var3 = "54,30 4,84 105,84"; // cone azul min
                var1 = "50"; //base ini x
                var2 = "13"; // base ini y

                var7 = "104";// base azul direita
                var8 = "30";//altura azul direita
                var9 = "4";// base azul esquerdo
                var10 = "30";//altura azul esquerdo

                var6 = "54,40 14,84 95,84"; // cone amarelo min
                var4 = "40"; //base ini x
                var5 = "10"; // base ini y
            } else if (var4numero === -2 && var2numero === 0) {
                var3 = "54,30 4,84 105,84"; // cone azul min
                var1 = "50"; //base ini x
                var2 = "13"; // base ini y

                var7 = "104";// base azul direita
                var8 = "30";//altura azul direita
                var9 = "4";// base azul esquerdo
                var10 = "30";//altura azul esquerdo

                var6 = "54,40 4,84 105,84"; // cone amarelo min
                var4 = "50"; //base ini x
                var5 = "13"; // base ini y
            } else if (var4numero === -2 && var2numero === 1) {
                var3 = "54,30 4,84 105,84"; // cone azul min
                var1 = "50"; //base ini x
                var2 = "13"; // base ini y

                var7 = "104";// base azul direita
                var8 = "30";//altura azul direita
                var9 = "4";// base azul esquerdo
                var10 = "30";//altura azul esquerdo

                var6 = "54,40 -5,84 115,84"; // cone amarelo min
                var4 = "60"; //base ini x
                var5 = "13"; // base ini y
            } else if (var4numero === 0 && var2numero === -1) {
                var3 = "54,30 4,84 105,84"; // cone azul min
                var1 = "50"; //base ini x
                var2 = "13"; // base ini y

                var7 = "104";// base azul direita
                var8 = "30";//altura azul direita
                var9 = "4";// base azul esquerdo
                var10 = "30";//altura azul esquerdo

                var6 = "54,30 14,84 95,84"; // cone amarelo min
                var4 = "40"; //base ini x
                var5 = "7"; // base ini y
            } else if (var4numero === 0 && var2numero === 0) {
                var3 = "54,30 4,84 105,84"; // cone azul min
                var1 = "50"; //base ini x
                var2 = "13"; // base ini y

                var7 = "104";// base azul direita
                var8 = "30";//altura azul direita
                var9 = "4";// base azul esquerdo
                var10 = "30";//altura azul esquerdo

                var6 = "54,30 4,84 105,84"; // cone amarelo min
                var4 = "50"; //base ini x
                var5 = "10"; // base ini y
            } else if (var4numero === 0 && var2numero === 1) {
                var3 = "54,30 4,84 105,84"; // cone azul min
                var1 = "50"; //base ini x
                var2 = "13"; // base ini y

                var7 = "104";// base azul direita
                var8 = "30";//altura azul direita
                var9 = "4";// base azul esquerdo
                var10 = "30";//altura azul esquerdo

                var6 = "54,30 -4,84 115,84"; // cone amarelo min
                var4 = "60"; //base ini x
                var5 = "13"; // base ini y
            } else if (var4numero === 2 && var2numero === -1) {
                var3 = "54,30 4,84 105,84"; // cone azul min
                var1 = "50"; //base ini x
                var2 = "13"; // base ini y

                var7 = "104";// base azul direita
                var8 = "30";//altura azul direita
                var9 = "4";// base azul esquerdo
                var10 = "30";//altura azul esquerdo

                var6 = "54,20 14,84 95,84"; // cone amarelo min
                var4 = "40"; //base ini x
                var5 = "7"; // base ini y
            } else if (var4numero === 2 && var2numero === 0) {
                var3 = "54,30 4,84 105,84"; // cone azul min
                var1 = "50"; //base ini x
                var2 = "13"; // base ini y

                var7 = "104";// base azul direita
                var8 = "30";//altura azul direita
                var9 = "4";// base azul esquerdo
                var10 = "30";//altura azul esquerdo

                var6 = "54,20 4,84 105,84"; // cone amarelo min
                var4 = "50"; //base ini x
                var5 = "13"; // base ini y
            } else if (var4numero === 2 && var2numero === 1) {
                var3 = "54,30 4,84 105,84"; // cone azul min
                var1 = "50"; //base ini x
                var2 = "13"; // base ini y

                var7 = "104";// base azul direita
                var8 = "30";//altura azul direita
                var9 = "4";// base azul esquerdo
                var10 = "30";//altura azul esquerdo

                var6 = "54,20 -4,84 115,84"; // cone amarelo min
                var4 = "60"; //base ini x
                var5 = "16"; // base ini y
            }

        }








        if (var3numero === 10 && var1numero === 11) {

            if (var4numero === -2 && var2numero === -1) {
                var3 = "54,20 24,84 85,84"; // cone azul min
                var1 = "30"; //base ini x
                var2 = "7"; // base ini y

                var7 = "84";// base azul direita
                var8 = "20";//altura azul direita
                var9 = "24";// base azul esquerdo
                var10 = "20";//altura azul esquerdo

                var6 = "54,30 34,84 75,84"; // cone amarelo min
                var4 = "20"; //base ini x
                var5 = "5"; // base ini y

            } else if (var4numero === -2 && var2numero === 0) {
                var3 = "54,20 24,84 85,84"; // cone azul min
                var1 = "30"; //base ini x
                var2 = "7"; // base ini y

                var7 = "84";// base azul direita
                var8 = "20";//altura azul direita
                var9 = "24";// base azul esquerdo
                var10 = "20";//altura azul esquerdo

                var6 = "54,30 24,84 85,84"; // cone amarelo min
                var4 = "30"; //base ini x
                var5 = "7"; // base ini y

            } else if (var4numero === -2 && var2numero === 1) {
                var3 = "54,20 24,84 85,84"; // cone azul min
                var1 = "30"; //base ini x
                var2 = "7"; // base ini y

                var7 = "84";// base azul direita
                var8 = "20";//altura azul direita
                var9 = "24";// base azul esquerdo
                var10 = "20";//altura azul esquerdo

                var6 = "54,30 14,84 95,84"; // cone amarelo min
                var4 = "40"; //base ini x
                var5 = "10"; // base ini y

            } else if (var4numero === 0 && var2numero === -1) {
                var3 = "54,20 24,84 85,84"; // cone azul min
                var1 = "30"; //base ini x
                var2 = "7"; // base ini y

                var7 = "84";// base azul direita
                var8 = "20";//altura azul direita
                var9 = "24";// base azul esquerdo
                var10 = "20";//altura azul esquerdo

                var6 = "54,20 34,84 75,84"; // cone amarelo min
                var4 = "20"; //base ini x
                var5 = "5"; // base ini y
            } else if (var4numero === 0 && var2numero === 0) {
                var3 = "54,20 24,84 85,84"; // cone azul min
                var1 = "30"; //base ini x
                var2 = "7"; // base ini y

                var7 = "84";// base azul direita
                var8 = "20";//altura azul direita
                var9 = "24";// base azul esquerdo
                var10 = "20";//altura azul esquerdo

                var6 = "54,20 24,84 85,84"; // cone amarelo min
                var4 = "30"; //base ini x
                var5 = "7"; // base ini y
            } else if (var4numero === 0 && var2numero === 1) {
                var3 = "54,20 24,84 85,84"; // cone azul min
                var1 = "30"; //base ini x
                var2 = "7"; // base ini y

                var7 = "84";// base azul direita
                var8 = "20";//altura azul direita
                var9 = "24";// base azul esquerdo
                var10 = "20";//altura azul esquerdo

                var6 = "54,20 14,84 95,84"; // cone amarelo min
                var4 = "40"; //base ini x
                var5 = "10"; // base ini y
            } else if (var4numero === 2 && var2numero === -1) {
                var3 = "54,20 24,84 85,84"; // cone azul min
                var1 = "30"; //base ini x
                var2 = "7"; // base ini y

                var7 = "84";// base azul direita
                var8 = "20";//altura azul direita
                var9 = "24";// base azul esquerdo
                var10 = "20";//altura azul esquerdo

                var6 = "54,10 34,84 75,84"; // cone amarelo min
                var4 = "20"; //base ini x
                var5 = "5"; // base ini y
            } else if (var4numero === 2 && var2numero === 0) {
                var3 = "54,20 24,84 85,84"; // cone azul min
                var1 = "30"; //base ini x
                var2 = "7"; // base ini y

                var7 = "84";// base azul direita
                var8 = "20";//altura azul direita
                var9 = "24";// base azul esquerdo
                var10 = "20";//altura azul esquerdo

                var6 = "54,10 24,84 85,84"; // cone amarelo min
                var4 = "30"; //base ini x
                var5 = "7"; // base ini y
            } else if (var4numero === 2 && var2numero === 1) {
                var3 = "54,20 24,84 85,84"; // cone azul min
                var1 = "30"; //base ini x
                var2 = "7"; // base ini y

                var7 = "84";// base azul direita
                var8 = "20";//altura azul direita
                var9 = "24";// base azul esquerdo
                var10 = "20";//altura azul esquerdo

                var6 = "54,10 14,84 95,84"; // cone amarelo min
                var4 = "40"; //base ini x
                var5 = "10"; // base ini y
            }             
        } 

        if (var3numero === 10 && var1numero === 12) {

            if (var4numero === -2 && var2numero === -1) {
                var3 = "54,20 14,84 95,84"; // cone azul min
                var1 = "40"; //base ini x
                var2 = "10"; // base ini y

                var7 = "94";// base azul direita
                var8 = "20";//altura azul direita
                var9 = "14";// base azul esquerdo
                var10 = "20";//altura azul esquerdo

                var6 = "54,30 24,84 85,84"; // cone amarelo min
                var4 = "30"; //base ini x
                var5 = "7"; // base ini y
            } else if (var4numero === -2 && var2numero === 0) {
                var3 = "54,20 14,84 95,84"; // cone azul min
                var1 = "40"; //base ini x
                var2 = "10"; // base ini y

                var7 = "94";// base azul direita
                var8 = "20";//altura azul direita
                var9 = "14";// base azul esquerdo
                var10 = "20";//altura azul esquerdo

                var6 = "54,30 14,84 95,84"; // cone amarelo min
                var4 = "40"; //base ini x
                var5 = "10"; // base ini y
            } else if (var4numero === -2 && var2numero === 1) {
                var3 = "54,20 14,84 95,84"; // cone azul min
                var1 = "40"; //base ini x
                var2 = "10"; // base ini y

                var7 = "94";// base azul direita
                var8 = "20";//altura azul direita
                var9 = "14";// base azul esquerdo
                var10 = "20";//altura azul esquerdo

                var6 = "54,30 4,84 105,84"; // cone amarelo min
                var4 = "50"; //base ini x
                var5 = "13"; // base ini y
            } else if (var4numero === 0 && var2numero === -1) {
                var3 = "54,20 14,84 95,84"; // cone azul min
                var1 = "40"; //base ini x
                var2 = "10"; // base ini y

                var7 = "94";// base azul direita
                var8 = "20";//altura azul direita
                var9 = "14";// base azul esquerdo
                var10 = "20";//altura azul esquerdo

                var6 = "54,20 24,84 85,84"; // cone amarelo min
                var4 = "30"; //base ini x
                var5 = "7"; // base ini y
            } else if (var4numero === 0 && var2numero === 0) {
                var3 = "54,20 14,84 95,84"; // cone azul min
                var1 = "40"; //base ini x
                var2 = "10"; // base ini y

                var7 = "94";// base azul direita
                var8 = "20";//altura azul direita
                var9 = "14";// base azul esquerdo
                var10 = "20";//altura azul esquerdo

                var6 = "54,20 14,84 95,84"; // cone amarelo min
                var4 = "40"; //base ini x
                var5 = "10"; // base ini y
            } else if (var4numero === 0 && var2numero === 1) {
                var3 = "54,20 14,84 95,84"; // cone azul min
                var1 = "40"; //base ini x
                var2 = "10"; // base ini y

                var7 = "94";// base azul direita
                var8 = "20";//altura azul direita
                var9 = "14";// base azul esquerdo
                var10 = "20";//altura azul esquerdo

                var6 = "54,20 4,84 105,84"; // cone amarelo min
                var4 = "50"; //base ini x
                var5 = "13"; // base ini y
            } else if (var4numero === 2 && var2numero === -1) {
                var3 = "54,20 14,84 95,84"; // cone azul min
                var1 = "40"; //base ini x
                var2 = "10"; // base ini y

                var7 = "94";// base azul direita
                var8 = "20";//altura azul direita
                var9 = "14";// base azul esquerdo
                var10 = "20";//altura azul esquerdo

                var6 = "54,10 24,84 85,84"; // cone amarelo min
                var4 = "30"; //base ini x
                var5 = "7"; // base ini y
            } else if (var4numero === 2 && var2numero === 0) {
                var3 = "54,20 14,84 95,84"; // cone azul min
                var1 = "40"; //base ini x
                var2 = "10"; // base ini y

                var7 = "94";// base azul direita
                var8 = "20";//altura azul direita
                var9 = "14";// base azul esquerdo
                var10 = "20";//altura azul esquerdo

                var6 = "54,10 14,84 95,84"; // cone amarelo min
                var4 = "40"; //base ini x
                var5 = "10"; // base ini y
            } else if (var4numero === 2 && var2numero === 1) {
                var3 = "54,20 14,84 95,84"; // cone azul min
                var1 = "40"; //base ini x
                var2 = "10"; // base ini y

                var7 = "94";// base azul direita
                var8 = "20";//altura azul direita
                var9 = "14";// base azul esquerdo
                var10 = "20";//altura azul esquerdo

                var6 = "54,10 4,84 105,84"; // cone amarelo min
                var4 = "50"; //base ini x
                var5 = "13"; // base ini y
            }  
 
 
        }






       

        
        

        if (var3numero === 10 && var1numero === 13) {
            if (var4numero === -2 && var2numero === -1) {
                var3 = "54,20 4,84 105,84"; // cone azul min
                var1 = "50"; //base ini x
                var2 = "13"; // base ini y

                var7 = "104";// base azul direita
                var8 = "20";//altura azul direita
                var9 = "4";// base azul esquerdo
                var10 = "20";//altura azul esquerdo

                var6 = "54,30 14,84 95,84"; // cone amarelo min
                var4 = "40"; //base ini x
                var5 = "10"; // base ini y
            }  else if (var4numero === -2 && var2numero === 0) {
                var3 = "54,20 4,84 105,84"; // cone azul min
                var1 = "50"; //base ini x
                var2 = "13"; // base ini y

                var7 = "104";// base azul direita
                var8 = "20";//altura azul direita
                var9 = "4";// base azul esquerdo
                var10 = "20";//altura azul esquerdo

                var6 = "54,30 4,84 105,84"; // cone amarelo min
                var4 = "50"; //base ini x
                var5 = "13"; // base ini y
            } else if (var4numero === -2 && var2numero === 1) {
                var3 = "54,20 4,84 105,84"; // cone azul min
                var1 = "50"; //base ini x
                var2 = "13"; // base ini y

                var7 = "104";// base azul direita
                var8 = "20";//altura azul direita
                var9 = "4";// base azul esquerdo
                var10 = "20";//altura azul esquerdo

                var6 = "54,30 -5,84 115,84"; // cone amarelo min
                var4 = "60"; //base ini x
                var5 = "13"; // base ini y
            } else if (var4numero === 0 && var2numero === -1) {
                var3 = "54,20 4,84 105,84"; // cone azul min
                var1 = "50"; //base ini x
                var2 = "13"; // base ini y

                var7 = "104";// base azul direita
                var8 = "20";//altura azul direita
                var9 = "4";// base azul esquerdo
                var10 = "20";//altura azul esquerdo

                var6 = "54,20 14,84 95,84"; // cone amarelo min
                var4 = "40"; //base ini x
                var5 = "7"; // base ini y
            } else if (var4numero === 0 && var2numero === 0) {
                var3 = "54,20 4,84 105,84"; // cone azul min
                var1 = "50"; //base ini x
                var2 = "13"; // base ini y

                var7 = "104";// base azul direita
                var8 = "20";//altura azul direita
                var9 = "4";// base azul esquerdo
                var10 = "20";//altura azul esquerdo

                var6 = "54,20 4,84 105,84"; // cone amarelo min
                var4 = "50"; //base ini x
                var5 = "10"; // base ini y
            } else if (var4numero === 0 && var2numero === 1) {
                var3 = "54,20 4,84 105,84"; // cone azul min
                var1 = "50"; //base ini x
                var2 = "13"; // base ini y

                var7 = "104";// base azul direita
                var8 = "20";//altura azul direita
                var9 = "4";// base azul esquerdo
                var10 = "20";//altura azul esquerdo

                var6 = "54,20 -4,84 115,84"; // cone amarelo min
                var4 = "60"; //base ini x
                var5 = "13"; // base ini y
            } else if (var4numero === 2 && var2numero === -1) {
                var3 = "54,20 4,84 105,84"; // cone azul min
                var1 = "50"; //base ini x
                var2 = "13"; // base ini y

                var7 = "104";// base azul direita
                var8 = "20";//altura azul direita
                var9 = "4";// base azul esquerdo
                var10 = "20";//altura azul esquerdo

                var6 = "54,10 14,84 95,84"; // cone amarelo min
                var4 = "40"; //base ini x
                var5 = "7"; // base ini y
            } else if (var4numero === 2 && var2numero === 0) {
                var3 = "54,20 4,84 105,84"; // cone azul min
                var1 = "50"; //base ini x
                var2 = "13"; // base ini y

                var7 = "104";// base azul direita
                var8 = "20";//altura azul direita
                var9 = "4";// base azul esquerdo
                var10 = "20";//altura azul esquerdo

                var6 = "54,10 4,84 105,84"; // cone amarelo min
                var4 = "50"; //base ini x
                var5 = "13"; // base ini y
            } else if (var4numero === 2 && var2numero === 1) {
                var3 = "54,20 4,84 105,84"; // cone azul min
                var1 = "50"; //base ini x
                var2 = "13"; // base ini y

                var7 = "104";// base azul direita
                var8 = "20";//altura azul direita
                var9 = "4";// base azul esquerdo
                var10 = "20";//altura azul esquerdo

                var6 = "54,10 -4,84 115,84"; // cone amarelo min
                var4 = "60"; //base ini x
                var5 = "16"; // base ini y
            }

        }

        if (var3numero === 12 && var1numero === 11) {

            if (var4numero === -2 && var2numero === -1) {
                var3 = "54,10 24,84 85,84"; // cone azul min
                var1 = "30"; //base ini x
                var2 = "7"; // base ini y

                var7 = "84";// base azul direita
                var8 = "10";//altura azul direita
                var9 = "24";// base azul esquerdo
                var10 = "10";//altura azul esquerdo

                var6 = "54,20 34,84 75,84"; // cone amarelo min
                var4 = "20"; //base ini x
                var5 = "5"; // base ini y

            } else if (var4numero === -2 && var2numero === 0) {
                var3 = "54,10 24,84 85,84"; // cone azul min
                var1 = "30"; //base ini x
                var2 = "7"; // base ini y

                var7 = "84";// base azul direita
                var8 = "10";//altura azul direita
                var9 = "24";// base azul esquerdo
                var10 = "10";//altura azul esquerdo

                var6 = "54,20 24,84 85,84"; // cone amarelo min
                var4 = "30"; //base ini x
                var5 = "7"; // base ini y

            } else if (var4numero === -2 && var2numero === 1) {
                var3 = "54,10 24,84 85,84"; // cone azul min
                var1 = "30"; //base ini x
                var2 = "7"; // base ini y

                var7 = "84";// base azul direita
                var8 = "10";//altura azul direita
                var9 = "24";// base azul esquerdo
                var10 = "10";//altura azul esquerdo

                var6 = "54,20 14,84 95,84"; // cone amarelo min
                var4 = "40"; //base ini x
                var5 = "10"; // base ini y

            } else if (var4numero === 0 && var2numero === -1) {
                var3 = "54,10 24,84 85,84"; // cone azul min
                var1 = "30"; //base ini x
                var2 = "7"; // base ini y

                var7 = "84";// base azul direita
                var8 = "10";//altura azul direita
                var9 = "24";// base azul esquerdo
                var10 = "10";//altura azul esquerdo

                var6 = "54,20 34,84 75,84"; // cone amarelo min
                var4 = "20"; //base ini x
                var5 = "5"; // base ini y
            } else if (var4numero === 0 && var2numero === 0) {
                var3 = "54,10 24,84 85,84"; // cone azul min
                var1 = "30"; //base ini x
                var2 = "7"; // base ini y

                var7 = "84";// base azul direita
                var8 = "10";//altura azul direita
                var9 = "24";// base azul esquerdo
                var10 = "10";//altura azul esquerdo

                var6 = "54,10 24,84 85,84"; // cone amarelo min
                var4 = "30"; //base ini x
                var5 = "7"; // base ini y
            } else if (var4numero === 0 && var2numero === 1) {
                var3 = "54,10 24,84 85,84"; // cone azul min
                var1 = "30"; //base ini x
                var2 = "7"; // base ini y

                var7 = "84";// base azul direita
                var8 = "10";//altura azul direita
                var9 = "24";// base azul esquerdo
                var10 = "10";//altura azul esquerdo

                var6 = "54,10 14,84 95,84"; // cone amarelo min
                var4 = "40"; //base ini x
                var5 = "10"; // base ini y
            } else if (var4numero === 2 && var2numero === -1) {
                var3 = "54,10 24,84 85,84"; // cone azul min
                var1 = "30"; //base ini x
                var2 = "7"; // base ini y

                var7 = "84";// base azul direita
                var8 = "10";//altura azul direita
                var9 = "24";// base azul esquerdo
                var10 = "10";//altura azul esquerdo

                var6 = "54,0 34,84 75,84"; // cone amarelo min
                var4 = "20"; //base ini x
                var5 = "5"; // base ini y
            } else if (var4numero === 2 && var2numero === 0) {
                var3 = "54,10 24,84 85,84"; // cone azul min
                var1 = "30"; //base ini x
                var2 = "7"; // base ini y

                var7 = "84";// base azul direita
                var8 = "10";//altura azul direita
                var9 = "24";// base azul esquerdo
                var10 = "10";//altura azul esquerdo

                var6 = "54,20 24,84 85,84"; // cone amarelo min
                var4 = "30"; //base ini x
                var5 = "7"; // base ini y
            } else if (var4numero === 2 && var2numero === 1) {
                var3 = "54,10 24,84 85,84"; // cone azul min
                var1 = "30"; //base ini x
                var2 = "7"; // base ini y

                var7 = "84";// base azul direita
                var8 = "10";//altura azul direita
                var9 = "24";// base azul esquerdo
                var10 = "10";//altura azul esquerdo

                var6 = "54,00 14,84 95,84"; // cone amarelo min
                var4 = "40"; //base ini x
                var5 = "10"; // base ini y
            }             
        } 

        if (var3numero === 12 && var1numero === 12) {

            if (var4numero === -2 && var2numero === -1) {
                var3 = "54,10 14,84 95,84"; // cone azul min
                var1 = "40"; //base ini x
                var2 = "10"; // base ini y

                var7 = "94";// base azul direita
                var8 = "10";//altura azul direita
                var9 = "14";// base azul esquerdo
                var10 = "10";//altura azul esquerdo

                var6 = "54,20 24,84 85,84"; // cone amarelo min
                var4 = "30"; //base ini x
                var5 = "7"; // base ini y
            } else if (var4numero === -2 && var2numero === 0) {
                var3 = "54,10 14,84 95,84"; // cone azul min
                var1 = "40"; //base ini x
                var2 = "10"; // base ini y

                var7 = "94";// base azul direita
                var8 = "10";//altura azul direita
                var9 = "14";// base azul esquerdo
                var10 = "10";//altura azul esquerdo

                var6 = "54,20 14,84 95,84"; // cone amarelo min
                var4 = "40"; //base ini x
                var5 = "10"; // base ini y
            } else if (var4numero === -2 && var2numero === 1) {
                var3 = "54,10 14,84 95,84"; // cone azul min
                var1 = "40"; //base ini x
                var2 = "10"; // base ini y

                var7 = "94";// base azul direita
                var8 = "10";//altura azul direita
                var9 = "14";// base azul esquerdo
                var10 = "10";//altura azul esquerdo

                var6 = "54,20 4,84 105,84"; // cone amarelo min
                var4 = "50"; //base ini x
                var5 = "13"; // base ini y
            } else if (var4numero === 0 && var2numero === -1) {
                var3 = "54,10 14,84 95,84"; // cone azul min
                var1 = "40"; //base ini x
                var2 = "10"; // base ini y

                var7 = "94";// base azul direita
                var8 = "10";//altura azul direita
                var9 = "14";// base azul esquerdo
                var10 = "10";//altura azul esquerdo

                var6 = "54,10 24,84 85,84"; // cone amarelo min
                var4 = "30"; //base ini x
                var5 = "7"; // base ini y
            } else if (var4numero === 0 && var2numero === 0) {
                var3 = "54,10 14,84 95,84"; // cone azul min
                var1 = "40"; //base ini x
                var2 = "10"; // base ini y

                var7 = "94";// base azul direita
                var8 = "10";//altura azul direita
                var9 = "14";// base azul esquerdo
                var10 = "10";//altura azul esquerdo

                var6 = "54,10 14,84 95,84"; // cone amarelo min
                var4 = "40"; //base ini x
                var5 = "10"; // base ini y
            } else if (var4numero === 0 && var2numero === 1) {
                var3 = "54,10 14,84 95,84"; // cone azul min
                var1 = "40"; //base ini x
                var2 = "10"; // base ini y

                var7 = "94";// base azul direita
                var8 = "10";//altura azul direita
                var9 = "14";// base azul esquerdo
                var10 = "10";//altura azul esquerdo

                var6 = "54,10 4,84 105,84"; // cone amarelo min
                var4 = "50"; //base ini x
                var5 = "13"; // base ini y
            } else if (var4numero === 2 && var2numero === -1) {
                var3 = "54,10 14,84 95,84"; // cone azul min
                var1 = "40"; //base ini x
                var2 = "10"; // base ini y

                var7 = "94";// base azul direita
                var8 = "10";//altura azul direita
                var9 = "14";// base azul esquerdo
                var10 = "10";//altura azul esquerdo

                var6 = "54,00 24,84 85,84"; // cone amarelo min
                var4 = "30"; //base ini x
                var5 = "7"; // base ini y
            } else if (var4numero === 2 && var2numero === 0) {
                var3 = "54,10 14,84 95,84"; // cone azul min
                var1 = "40"; //base ini x
                var2 = "10"; // base ini y

                var7 = "94";// base azul direita
                var8 = "10";//altura azul direita
                var9 = "14";// base azul esquerdo
                var10 = "10";//altura azul esquerdo

                var6 = "54,20 14,84 95,84"; // cone amarelo min
                var4 = "40"; //base ini x
                var5 = "10"; // base ini y
            } else if (var4numero === 2 && var2numero === 1) {
                var3 = "54,10 14,84 95,84"; // cone azul min
                var1 = "40"; //base ini x
                var2 = "10"; // base ini y

                var7 = "94";// base azul direita
                var8 = "10";//altura azul direita
                var9 = "14";// base azul esquerdo
                var10 = "10";//altura azul esquerdo

                var6 = "54,00 4,84 105,84"; // cone amarelo min
                var4 = "50"; //base ini x
                var5 = "13"; // base ini y
            }  
 
 
        }


        

        if (var3numero === 12 && var1numero === 13) {
            if (var4numero === -2 && var2numero === -1) {
                var3 = "54,10 4,84 105,84"; // cone azul min
                var1 = "50"; //base ini x
                var2 = "13"; // base ini y

                var7 = "104";// base azul direita
                var8 = "10";//altura azul direita
                var9 = "4";// base azul esquerdo
                var10 = "10";//altura azul esquerdo

                var6 = "54,20 14,84 95,84"; // cone amarelo min
                var4 = "40"; //base ini x
                var5 = "10"; // base ini y
            }  else if (var4numero === -2 && var2numero === 0) {
                var3 = "54,10 4,84 105,84"; // cone azul min
                var1 = "50"; //base ini x
                var2 = "13"; // base ini y

                var7 = "104";// base azul direita
                var8 = "10";//altura azul direita
                var9 = "4";// base azul esquerdo
                var10 = "10";//altura azul esquerdo

                var6 = "54,20 4,84 105,84"; // cone amarelo min
                var4 = "50"; //base ini x
                var5 = "13"; // base ini y
            } else if (var4numero === -2 && var2numero === 1) {
                var3 = "54,10 4,84 105,84"; // cone azul min
                var1 = "50"; //base ini x
                var2 = "13"; // base ini y

                var7 = "104";// base azul direita
                var8 = "10";//altura azul direita
                var9 = "4";// base azul esquerdo
                var10 = "10";//altura azul esquerdo

                var6 = "54,20 -5,84 115,84"; // cone amarelo min
                var4 = "60"; //base ini x
                var5 = "13"; // base ini y
            } else if (var4numero === 0 && var2numero === -1) {
                var3 = "54,10 4,84 105,84"; // cone azul min
                var1 = "50"; //base ini x
                var2 = "13"; // base ini y

                var7 = "104";// base azul direita
                var8 = "10";//altura azul direita
                var9 = "4";// base azul esquerdo
                var10 = "10";//altura azul esquerdo

                var6 = "54,10 14,84 95,84"; // cone amarelo min
                var4 = "40"; //base ini x
                var5 = "7"; // base ini y
            } else if (var4numero === 0 && var2numero === 0) {
                var3 = "54,10 4,84 105,84"; // cone azul min
                var1 = "50"; //base ini x
                var2 = "13"; // base ini y

                var7 = "104";// base azul direita
                var8 = "10";//altura azul direita
                var9 = "4";// base azul esquerdo
                var10 = "10";//altura azul esquerdo

                var6 = "54,10 4,84 105,84"; // cone amarelo min
                var4 = "50"; //base ini x
                var5 = "10"; // base ini y
            } else if (var4numero === 0 && var2numero === 1) {
                var3 = "54,10 4,84 105,84"; // cone azul min
                var1 = "50"; //base ini x
                var2 = "13"; // base ini y

                var7 = "104";// base azul direita
                var8 = "10";//altura azul direita
                var9 = "4";// base azul esquerdo
                var10 = "10";//altura azul esquerdo

                var6 = "54,10 -4,84 115,84"; // cone amarelo min
                var4 = "60"; //base ini x
                var5 = "13"; // base ini y
            } else if (var4numero === 2 && var2numero === -1) {
                var3 = "54,10 4,84 105,84"; // cone azul min
                var1 = "50"; //base ini x
                var2 = "13"; // base ini y

                var7 = "104";// base azul direita
                var8 = "10";//altura azul direita
                var9 = "4";// base azul esquerdo
                var10 = "10";//altura azul esquerdo

                var6 = "54,00 14,84 95,84"; // cone amarelo min
                var4 = "40"; //base ini x
                var5 = "7"; // base ini y
            } else if (var4numero === 2 && var2numero === 0) {
                var3 = "54,10 4,84 105,84"; // cone azul min
                var1 = "50"; //base ini x
                var2 = "13"; // base ini y

                var7 = "104";// base azul direita
                var8 = "10";//altura azul direita
                var9 = "4";// base azul esquerdo
                var10 = "10";//altura azul esquerdo

                var6 = "54,00 4,84 105,84"; // cone amarelo min
                var4 = "50"; //base ini x
                var5 = "13"; // base ini y
            } else if (var4numero === 2 && var2numero === 1) {
                var3 = "54,10 4,84 105,84"; // cone azul min
                var1 = "50"; //base ini x
                var2 = "13"; // base ini y

                var7 = "104";// base azul direita
                var8 = "10";//altura azul direita
                var9 = "4";// base azul esquerdo
                var10 = "10";//altura azul esquerdo

                var6 = "54,00 -4,84 115,84"; // cone amarelo min
                var4 = "60"; //base ini x
                var5 = "16"; // base ini y
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
            <Svg height="100" width="100" viewBox="-10 0 130 100" >
                
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
                x1= {var7}// base amarela direita
                y1="85" // não muda
                x2="54" // não muda
                y2= {var8} // altura amarela direita
                stroke="purple"
                strokeWidth="2"
                />

                <Line
                x1= {var9}  // base amarela esquerda
                y1="84" // não muda
                x2="54" // não muda
                y2= {var10}  // altura amarela esquerda
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
