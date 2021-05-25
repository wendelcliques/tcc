import React, {useState} from 'react'
import { View, Text } from 'react-native'

import Container from '../Container'

import EntrySummaryChart from './EntrySummaryChart'


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
}) => {
    //const [xa, setXa] = useState(var1numero);
let y1 = Math.sin(0.01);
let y2 = Math.sin(-5);
let y3 = Math.sin(0);
let y4 = Math.sin(5);
let y5 = Math.sin(10);
    const data1 = [
        {x: var1numero, y: -20 },
        //{x: -1, y: 0 },
        //{x: 8, y: 13 },
//{x: 9, y: 11.5 },
        {x: 10, y: 12 }
        ]

        const data2 = [
            {x: xmin, y: ymin },
            //{x: -1, y: 10 },
           {x: x1 , y: 0 },
           {x: xv , y: yv },
            {x: x2 , y: 0 },
            //{x: 8, y: 12 },
           // {x: 9, y: 13.5 },
            {x: xmax, y: ymax }
            ]


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
            <EntrySummaryChart data1={data1} data2={data2} />
        </View>
        </Container>
    )
}

export default EntrySummary
