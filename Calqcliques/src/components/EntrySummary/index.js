import React, {useState} from 'react'
import { View, Text } from 'react-native'

import Container from '../Container'

import EntrySummaryChart from './EntrySummaryChart'
import EntrySummaryTaxa from './EntrySummaryTaxa'


const EntrySummary = ({categoria,
    x1,
    x2,
    xv,
    yv,

    xmin,
    xmax,
    ymin,
    ymax,
    var1numero,
var2numero,
var3numero,
var4numero,

xminmeio,
    xmaxmeio,
    yminmeio,
    ymaxmeio,

    xtaxa,

desenvolvimento,
ondas,
ondas1,
ondas0press,
ondas1press,
ondas2press,
ondas3press,
}) => {
    //const [xa, setXa] = useState(var1numero);


console.log("ondas1", ondas1);


let y1 = Math.sin(0.01);
let y2 = Math.sin(-5);
let y3 = Math.sin(0);
let y4 = Math.sin(5);
let y5 = Math.sin(10);




    const data1 = [
        {x: 0, y: 0 },
       
        {x: 0, y: 0 }
        ]
let data2 = [{x: 0, y: 0}];
            
  let data3 = [{x: 0, y: 0}];
  let data4 = [{x: 0, y: 0}];
  let data5 = [{x: 0, y: 0}];
  let data6 = [{x: 0, y: 0}];

       if (desenvolvimento == true) {
         data2 = [
            
            {x: xmin, y: ymin },
            {x: xminmeio, y: yminmeio},
           {x: x1 , y: 0 },
           {x: xv , y: yv },
            {x: x2 , y: 0 },
            {x: xmaxmeio, y: ymaxmeio },
           // {x: 9, y: 13.5 },
            {x: xmax, y: ymax }
            ]
            
        }
         if (ondas == true) {

            if (ondas1 === "ondas0") {

            data3 = [
            
                {x: 0, y: 2*0*Math.cos(0*0) },
                {x: 1, y: 2*1*Math.cos(1*1) },
                {x: 2, y: 2*2*Math.cos(2*2) },
                {x: 3, y: 2*3*Math.cos(3*3) },
                {x: 4, y: 2*4*Math.cos(4*4) },
                {x: 5, y: 2*5*Math.cos(5*5) },
                {x: 6, y: 2*6*Math.cos(6*6) },
                {x: 7, y: 2*7*Math.cos(7*7) },
                {x: 8, y: 2*8*Math.cos(8*8) },
                {x: 9, y: 2*9*Math.cos(9*9) },
                {x: 10, y: 2*10*Math.cos(10*10) },
                {x: 11, y: 2*11*Math.cos(11*11) },
                {x: 12, y: 2*12*Math.cos(12*12) },
                {x: 13, y: 2*13*Math.cos(13*13) },
                {x: 14, y: 2*14*Math.cos(14*14) },
                {x: 15, y: 2*15*Math.cos(15*15) },
                {x: 16, y: 2*16*Math.cos(16*16) },
                {x: 17, y: 2*17*Math.cos(17*17) },
                {x: 18, y: 2*18*Math.cos(18*18) },
                {x: 19, y: 2*19*Math.cos(19*19) },
                {x: 20, y: 2*20*Math.cos(20*20) },
                {x: 21, y: 2*21*Math.cos(21*21) },
                {x: 22, y: 2*22*Math.cos(22*22) },
                {x: 23, y: 2*23*Math.cos(23*23) },
                {x: 24, y: 2*24*Math.cos(24*24) },
                {x: 25, y: 2*25*Math.cos(25*25) },
                {x: 26, y: 2*26*Math.cos(26*26) },
                {x: 27, y: 2*27*Math.cos(27*27) },
                {x: 28, y: 2*28*Math.cos(28*28) },
                {x: 29, y: 2*29*Math.cos(29*29) },
                {x: 30, y: 2*30*Math.cos(30*30) },
                {x: 31, y: 2*31*Math.cos(31*31) },
                {x: 32, y: 2*32*Math.cos(32*32) },
                {x: 33, y: 2*33*Math.cos(33*33) },
                {x: 34, y: 2*34*Math.cos(34*34) },
                {x: 35, y: 2*35*Math.cos(35*35) },
                {x: 36, y: 2*36*Math.cos(36*36) },
                {x: 37, y: 2*37*Math.cos(37*37) },
                {x: 38, y: 2*38*Math.cos(38*38) },
                {x: 39, y: 2*39*Math.cos(39*39) },
                {x: 40, y: 2*40*Math.cos(40*40) },
                {x: 41, y: 2*41*Math.cos(41*41) },
                {x: 42, y: 2*42*Math.cos(42*42) },
                {x: 43, y: 2*43*Math.cos(43*43) },
                {x: 44, y: 2*44*Math.cos(44*44) },
                {x: 45, y: 2*45*Math.cos(45*45) },
                {x: 46, y: 2*46*Math.cos(46*46) },
                {x: 47, y: 2*47*Math.cos(47*47) },
                {x: 48, y: 2*48*Math.cos(48*48) },
                {x: 49, y: 2*49*Math.cos(49*49) },
                {x: 50, y: 2*50*Math.cos(50*50) },
                {x: 51, y: 2*51*Math.cos(51*51) },
                {x: 52, y: 2*52*Math.cos(52*52) },
                {x: 53, y: 2*53*Math.cos(53*53) },
                {x: 54, y: 2*54*Math.cos(54*54) },
                {x: 55, y: 2*55*Math.cos(55*55) },
                {x: 56, y: 2*56*Math.cos(56*56) },
                {x: 57, y: 2*57*Math.cos(57*57) },
                {x: 58, y: 2*58*Math.cos(58*58) },
                {x: 59, y: 2*59*Math.cos(59*59) },
                {x: 60, y: 2*60*Math.cos(60*60) },
                {x: 61, y: 2*61*Math.cos(61*61) },
                {x: 62, y: 2*62*Math.cos(62*62) },
                {x: 63, y: 2*63*Math.cos(63*63) },
                {x: 64, y: 2*64*Math.cos(64*64) },
                {x: 65, y: 2*65*Math.cos(65*65) },
                {x: 66, y: 2*66*Math.cos(66*66) },
                {x: 67, y: 2*67*Math.cos(67*67) },
                {x: 68, y: 2*68*Math.cos(68*68) },
                {x: 69, y: 2*69*Math.cos(69*69) },
                {x: 70, y: 2*70*Math.cos(70*70) },
                {x: 71, y: 2*71*Math.cos(71*71) },
                {x: 72, y: 2*72*Math.cos(72*72) },
                {x: 73, y: 2*73*Math.cos(73*73) },
                {x: 74, y: 2*74*Math.cos(74*74) },
                {x: 75, y: 2*75*Math.cos(75*75) },
                {x: 76, y: 2*76*Math.cos(76*76) },
                {x: 77, y: 2*77*Math.cos(77*77) },
                {x: 78, y: 2*78*Math.cos(78*78) },
                {x: 79, y: 2*79*Math.cos(79*79) },
                {x: 80, y: 2*80*Math.cos(80*80) },
                {x: 81, y: 2*81*Math.cos(81*81) },
                {x: 82, y: 2*82*Math.cos(82*82) },
                {x: 83, y: 2*83*Math.cos(83*83) },
                {x: 84, y: 2*84*Math.cos(84*84) },
                {x: 85, y: 2*85*Math.cos(85*85) },
                {x: 86, y: 2*86*Math.cos(86*86) },
                {x: 87, y: 2*87*Math.cos(87*87) },
                {x: 88, y: 2*88*Math.cos(88*88) },
                {x: 89, y: 2*89*Math.cos(89*89) },
                ]
            }
            } 
            
            if (ondas1 === "ondas1") {

                data4 = [
            
                    {x: 0, y: 100*Math.cos(0*0) },
                    {x: 1, y: 100*Math.cos(1*1) },
                    {x: 2, y: 100*Math.cos(2*2) },
                    {x: 3, y: 100*Math.cos(3*3) },
                    {x: 4, y: 100*Math.cos(4*4) },
                    {x: 5, y: 100*Math.cos(5*5) },
                    {x: 6, y: 100*Math.cos(6*6) },
                    {x: 7, y: 100*Math.cos(7*7) },
                    {x: 8, y: 100*Math.cos(8*8) },
                    {x: 9, y: 100*Math.cos(9*9) },
                    {x: 10, y: 100*Math.cos(10*10) },
                    {x: 11, y: 100*Math.cos(11*11) },
                    {x: 12, y: 100*Math.cos(12*12) },
                    {x: 13, y: 100*Math.cos(13*13) },
                    {x: 14, y: 100*Math.cos(14*14) },
                    {x: 15, y: 100*Math.cos(15*15) },
                    {x: 16, y: 100*Math.cos(16*16) },
                    {x: 17, y: 100*Math.cos(17*17) },
                    {x: 18, y: 100*Math.cos(18*18) },
                    {x: 19, y: 100*Math.cos(19*19) },
                    {x: 20, y: 100*Math.cos(20*20) },
                    {x: 21, y: 100*Math.cos(21*21) },
                    {x: 22, y: 100*Math.cos(22*22) },
                    {x: 23, y: 100*Math.cos(23*23) },
                    {x: 24, y: 100*Math.cos(24*24) },
                    {x: 25, y: 100*Math.cos(25*25) },
                    {x: 26, y: 100*Math.cos(26*26) },
                    {x: 27, y: 100*Math.cos(27*27) },
                    {x: 28, y: 100*Math.cos(28*28) },
                    {x: 29, y: 100*Math.cos(29*29) },
                    {x: 30, y: 100*Math.cos(30*30) },
                    {x: 31, y: 100*Math.cos(31*31) },
                    {x: 32, y: 100*Math.cos(32*32) },
                    {x: 33, y: 100*Math.cos(33*33) },
                    {x: 34, y: 100*Math.cos(34*34) },
                    {x: 35, y: 100*Math.cos(35*35) },
                    {x: 36, y: 100*Math.cos(36*36) },
                    {x: 37, y: 100*Math.cos(37*37) },
                    {x: 38, y: 100*Math.cos(38*38) },
                    {x: 39, y: 100*Math.cos(39*39) },
                    {x: 40, y: 100*Math.cos(40*40) },
                    {x: 41, y: 100*Math.cos(41*41) },
                    {x: 42, y: 100*Math.cos(42*42) },
                    {x: 43, y: 100*Math.cos(43*43) },
                    {x: 44, y: 100*Math.cos(44*44) },
                    {x: 45, y: 100*Math.cos(45*45) },
                    {x: 46, y: 100*Math.cos(46*46) },
                    {x: 47, y: 100*Math.cos(47*47) },
                    {x: 48, y: 100*Math.cos(48*48) },
                    {x: 49, y: 100*Math.cos(49*49) },
                    {x: 50, y: 100*Math.cos(50*50) },
                    {x: 51, y: 100*Math.cos(51*51) },
                    {x: 52, y: 100*Math.cos(52*52) },
                    {x: 53, y: 100*Math.cos(53*53) },
                    {x: 54, y: 100*Math.cos(54*54) },
                    {x: 55, y: 100*Math.cos(55*55) },
                    {x: 56, y: 100*Math.cos(56*56) },
                    {x: 57, y: 100*Math.cos(57*57) },
                    {x: 58, y: 100*Math.cos(58*58) },
                    {x: 59, y: 100*Math.cos(59*59) },
                    {x: 60, y: 100*Math.cos(60*60) },
                    {x: 61, y: 100*Math.cos(61*61) },
                    {x: 62, y: 100*Math.cos(62*62) },
                    {x: 63, y: 100*Math.cos(63*63) },
                    {x: 64, y: 100*Math.cos(64*64) },
                    {x: 65, y: 100*Math.cos(65*65) },
                    {x: 66, y: 100*Math.cos(66*66) },
                    {x: 67, y: 100*Math.cos(67*67) },
                    {x: 68, y: 100*Math.cos(68*68) },
                    {x: 69, y: 100*Math.cos(69*69) },
                    {x: 70, y: 100*Math.cos(70*70) },
                    {x: 71, y: 100*Math.cos(71*71) },
                    {x: 72, y: 100*Math.cos(72*72) },
                    {x: 73, y: 100*Math.cos(73*73) },
                    {x: 74, y: 100*Math.cos(74*74) },
                    {x: 75, y: 100*Math.cos(75*75) },
                    {x: 76, y: 100*Math.cos(76*76) },
                    {x: 77, y: 100*Math.cos(77*77) },
                    {x: 78, y: 100*Math.cos(78*78) },
                    {x: 79, y: 100*Math.cos(79*79) },
                    {x: 80, y: 100*Math.cos(80*80) },
                    {x: 81, y: 100*Math.cos(81*81) },
                    {x: 82, y: 100*Math.cos(82*82) },
                    {x: 83, y: 100*Math.cos(83*83) },
                    {x: 84, y: 100*Math.cos(84*84) },
                    {x: 85, y: 100*Math.cos(85*85) },
                    {x: 86, y: 100*Math.cos(86*86) },
                    {x: 87, y: 100*Math.cos(87*87) },
                    {x: 88, y: 100*Math.cos(88*88) },
                    {x: 89, y: 100*Math.cos(89*89) },
                    ]
                }
                    if (ondas1 === "ondas2") {
                    data5 = [
            
                        {x: 0, y: 100*Math.cos(0) },
                        {x: 1, y: 100*Math.cos(1) },
                        {x: 2, y: 100*Math.cos(2) },
                        {x: 3, y: 100*Math.cos(3) },
                        {x: 4, y: 100*Math.cos(4) },
                        {x: 5, y: 100*Math.cos(5) },
                        {x: 6, y: 100*Math.cos(6) },
                        {x: 7, y: 100*Math.cos(7) },
                        {x: 8, y: 100*Math.cos(8) },
                        {x: 9, y: 100*Math.cos(9) },
                        {x: 10, y: 100*Math.cos(10) },
                        {x: 11, y: 100*Math.cos(11) },
                        {x: 12, y: 100*Math.cos(12) },
                        {x: 13, y: 100*Math.cos(13) },
                        {x: 14, y: 100*Math.cos(14) },
                        {x: 15, y: 100*Math.cos(15) },
                        {x: 16, y: 100*Math.cos(16) },
                        {x: 17, y: 100*Math.cos(17) },
                        {x: 18, y: 100*Math.cos(18) },
                        {x: 19, y: 100*Math.cos(19) },
                        {x: 20, y: 100*Math.cos(20) },
                        {x: 21, y: 100*Math.cos(21) },
                        {x: 22, y: 100*Math.cos(22) },
                        {x: 23, y: 100*Math.cos(23) },
                        {x: 24, y: 100*Math.cos(24) },
                        {x: 25, y: 100*Math.cos(25) },
                        {x: 26, y: 100*Math.cos(26) },
                        {x: 27, y: 100*Math.cos(27) },
                        {x: 28, y: 100*Math.cos(28) },
                        {x: 29, y: 100*Math.cos(29) },
                        {x: 30, y: 100*Math.cos(30) },
                        {x: 31, y: 100*Math.cos(31) },
                        {x: 32, y: 100*Math.cos(32) },
                        {x: 33, y: 100*Math.cos(33) },
                        {x: 34, y: 100*Math.cos(34) },
                        {x: 35, y: 100*Math.cos(35) },
                        {x: 36, y: 100*Math.cos(36) },
                        {x: 37, y: 100*Math.cos(37) },
                        {x: 38, y: 100*Math.cos(38) },
                        {x: 39, y: 100*Math.cos(39) },
                        {x: 40, y: 100*Math.cos(40) },
                        {x: 41, y: 100*Math.cos(41) },
                        {x: 42, y: 100*Math.cos(42) },
                        {x: 43, y: 100*Math.cos(43) },
                        {x: 44, y: 100*Math.cos(44) },
                        {x: 45, y: 100*Math.cos(45) },
                        {x: 46, y: 100*Math.cos(46) },
                        {x: 47, y: 100*Math.cos(47) },
                        {x: 48, y: 100*Math.cos(48) },
                        {x: 49, y: 100*Math.cos(49) },
                        {x: 50, y: 100*Math.cos(50) },
                        {x: 51, y: 100*Math.cos(51) },
                        {x: 52, y: 100*Math.cos(52) },
                        {x: 53, y: 100*Math.cos(53) },
                        {x: 54, y: 100*Math.cos(54) },
                        {x: 55, y: 100*Math.cos(55) },
                        {x: 56, y: 100*Math.cos(56) },
                        {x: 57, y: 100*Math.cos(57) },
                        {x: 58, y: 100*Math.cos(58) },
                        {x: 59, y: 100*Math.cos(59) },
                        {x: 60, y: 100*Math.cos(60) },
                        {x: 61, y: 100*Math.cos(61) },
                        {x: 62, y: 100*Math.cos(62) },
                        {x: 63, y: 100*Math.cos(63) },
                        {x: 64, y: 100*Math.cos(64) },
                        {x: 65, y: 100*Math.cos(65) },
                        {x: 66, y: 100*Math.cos(66) },
                        {x: 67, y: 100*Math.cos(67) },
                        {x: 68, y: 100*Math.cos(68) },
                        {x: 69, y: 100*Math.cos(69) },
                        {x: 70, y: 100*Math.cos(70) },
                        {x: 71, y: 100*Math.cos(71) },
                        {x: 72, y: 100*Math.cos(72) },
                        {x: 73, y: 100*Math.cos(73) },
                        {x: 74, y: 100*Math.cos(74) },
                        {x: 75, y: 100*Math.cos(75) },
                        {x: 76, y: 100*Math.cos(76) },
                        {x: 77, y: 100*Math.cos(77) },
                        {x: 78, y: 100*Math.cos(78) },
                        {x: 79, y: 100*Math.cos(79) },
                        {x: 80, y: 100*Math.cos(80) },
                        {x: 81, y: 100*Math.cos(81) },
                        {x: 82, y: 100*Math.cos(82) },
                        {x: 83, y: 100*Math.cos(83) },
                        {x: 84, y: 100*Math.cos(84) },
                        {x: 85, y: 100*Math.cos(85) },
                        {x: 86, y: 100*Math.cos(86) },
                        {x: 87, y: 100*Math.cos(87) },
                        {x: 88, y: 100*Math.cos(88) },
                        {x: 89, y: 100*Math.cos(89) },
                        ]

                    }
                    if (ondas1 === "ondas3") {
                        data6 = [
            
                            {x: 0, y: 2*0*Math.cos(0) },
                            {x: 1, y: 2*1*Math.cos(1) },
                            {x: 2, y: 2*2*Math.cos(2) },
                            {x: 3, y: 2*3*Math.cos(3) },
                            {x: 4, y: 2*4*Math.cos(4) },
                            {x: 5, y: 2*5*Math.cos(5) },
                            {x: 6, y: 2*6*Math.cos(6) },
                            {x: 7, y: 2*7*Math.cos(7) },
                            {x: 8, y: 2*8*Math.cos(8) },
                            {x: 9, y: 2*9*Math.cos(9) },
                            {x: 10, y: 2*10*Math.cos(10) },
                            {x: 11, y: 2*11*Math.cos(11) },
                            {x: 12, y: 2*12*Math.cos(12) },
                            {x: 13, y: 2*13*Math.cos(13) },
                            {x: 14, y: 2*14*Math.cos(14) },
                            {x: 15, y: 2*15*Math.cos(15) },
                            {x: 16, y: 2*16*Math.cos(16) },
                            {x: 17, y: 2*17*Math.cos(17) },
                            {x: 18, y: 2*18*Math.cos(18) },
                            {x: 19, y: 2*19*Math.cos(19) },
                            {x: 20, y: 2*20*Math.cos(20) },
                            {x: 21, y: 2*21*Math.cos(21) },
                            {x: 22, y: 2*22*Math.cos(22) },
                            {x: 23, y: 2*23*Math.cos(23) },
                            {x: 24, y: 2*24*Math.cos(24) },
                            {x: 25, y: 2*25*Math.cos(25) },
                            {x: 26, y: 2*26*Math.cos(26) },
                            {x: 27, y: 2*27*Math.cos(27) },
                            {x: 28, y: 2*28*Math.cos(28) },
                            {x: 29, y: 2*29*Math.cos(29) },
                            {x: 30, y: 2*30*Math.cos(30) },
                            {x: 31, y: 2*31*Math.cos(31) },
                            {x: 32, y: 2*32*Math.cos(32) },
                            {x: 33, y: 2*33*Math.cos(33) },
                            {x: 34, y: 2*34*Math.cos(34) },
                            {x: 35, y: 2*35*Math.cos(35) },
                            {x: 36, y: 2*36*Math.cos(36) },
                            {x: 37, y: 2*37*Math.cos(37) },
                            {x: 38, y: 2*38*Math.cos(38) },
                            {x: 39, y: 2*39*Math.cos(39) },
                            {x: 40, y: 2*40*Math.cos(40) },
                            {x: 41, y: 2*41*Math.cos(41) },
                            {x: 42, y: 2*42*Math.cos(42) },
                            {x: 43, y: 2*43*Math.cos(43) },
                            {x: 44, y: 2*44*Math.cos(44) },
                            {x: 45, y: 2*45*Math.cos(45) },
                            {x: 46, y: 2*46*Math.cos(46) },
                            {x: 47, y: 2*47*Math.cos(47) },
                            {x: 48, y: 2*48*Math.cos(48) },
                            {x: 49, y: 2*49*Math.cos(49) },
                            {x: 50, y: 2*50*Math.cos(50) },
                            {x: 51, y: 2*51*Math.cos(51) },
                            {x: 52, y: 2*52*Math.cos(52) },
                            {x: 53, y: 2*53*Math.cos(53) },
                            {x: 54, y: 2*54*Math.cos(54) },
                            {x: 55, y: 2*55*Math.cos(55) },
                            {x: 56, y: 2*56*Math.cos(56) },
                            {x: 57, y: 2*57*Math.cos(57) },
                            {x: 58, y: 2*58*Math.cos(58) },
                            {x: 59, y: 2*59*Math.cos(59) },
                            {x: 60, y: 2*60*Math.cos(60) },
                            {x: 61, y: 2*61*Math.cos(61) },
                            {x: 62, y: 2*62*Math.cos(62) },
                            {x: 63, y: 2*63*Math.cos(63) },
                            {x: 64, y: 2*64*Math.cos(64) },
                            {x: 65, y: 2*65*Math.cos(65) },
                            {x: 66, y: 2*66*Math.cos(66) },
                            {x: 67, y: 2*67*Math.cos(67) },
                            {x: 68, y: 2*68*Math.cos(68) },
                            {x: 69, y: 2*69*Math.cos(69) },
                            {x: 70, y: 2*70*Math.cos(70) },
                            {x: 71, y: 2*71*Math.cos(71) },
                            {x: 72, y: 2*72*Math.cos(72) },
                            {x: 73, y: 2*73*Math.cos(73) },
                            {x: 74, y: 2*74*Math.cos(74) },
                            {x: 75, y: 2*75*Math.cos(75) },
                            {x: 76, y: 2*76*Math.cos(76) },
                            {x: 77, y: 2*77*Math.cos(77) },
                            {x: 78, y: 2*78*Math.cos(78) },
                            {x: 79, y: 2*79*Math.cos(79) },
                            {x: 80, y: 2*80*Math.cos(80) },
                            {x: 81, y: 2*81*Math.cos(81) },
                            {x: 82, y: 2*82*Math.cos(82) },
                            {x: 83, y: 2*83*Math.cos(83) },
                            {x: 84, y: 2*84*Math.cos(84) },
                            {x: 85, y: 2*85*Math.cos(85) },
                            {x: 86, y: 2*86*Math.cos(86) },
                            {x: 87, y: 2*87*Math.cos(87) },
                            {x: 88, y: 2*88*Math.cos(88) },
                            {x: 89, y: 2*89*Math.cos(89) },
                            ]
            
        }
        
      

        
let raioinicial = 5;
let taxaraio = 1;
let altinicial = 1;
let taxaalt = 1;


let a = 2*raioinicial*raioinicial*taxaalt

let b = 2*raioinicial*taxaraio*altinicial;



//var x1 = 5+52;

console.log("grafico :: x1", x1);

//var x2 = (b+b)/a;

console.log("grafico :: x2", x2);

//let xv = (x2-x1)/2;

//let yv = (xv*xv*taxaalt)+(2*xv*taxaraio*altinicial);

console.log("grafico :: yv", yv);

console.log("grafico :: xmin", xmin);
console.log("grafico :: ymin", ymin);
console.log("grafico :: xmax", xmax);
console.log("grafico :: ymax", ymax);

    return (
        <Container>
        <View>

            {ondas && (
            <EntrySummaryChart 
            
            data1={data1} 
            
            data2={data2}
            
            data3={data3}

            data4={data4}
            data5={data5}
            data6={data6}

            ondas0press={ondas0press}

            ondas1press={
                ondas1press               
            }
            ondas2press={ondas2press}
            ondas3press={ondas3press}
            ondas1={ondas1}
            
            />
            )}

{desenvolvimento && (
            <EntrySummaryTaxa 
            data1={data1}
            data2={data2}
            />
            )}
            
        </View>
        </Container>
    )
}

export default EntrySummary
