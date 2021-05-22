import React, {useState} from 'react'
import { View, Text } from 'react-native'

import Container from '../Container'

import EntrySummaryChart from './EntrySummaryChart'


const EntrySummary = ({var1numero}) => {
    //const [xa, setXa] = useState(var1numero);
let y1 = Math.sin(-10);
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
            {x: -10, y: y1 },
            //{x: -1, y: 10 },
           {x: -5, y: y2 },
           {x: 0, y: y3 },
            {x: 5, y: y4 },
            //{x: 8, y: 12 },
           // {x: 9, y: 13.5 },
            {x: 10, y: y5 }
            ]
    return (
        <Container>
        <View>
            <EntrySummaryChart data1={data1} data2={data2} />
        </View>
        </Container>
    )
}

export default EntrySummary
