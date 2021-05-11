import React from 'react'
import { View, Text } from 'react-native'

import Container from '../Container'

import EntrySummaryChart from './EntrySummaryChart'

const EntrySummary = () => {
    const data1 = [
        {x: -2, y: -20 },
        //{x: -1, y: 0 },
       // {x: 8, y: 13 },
//{x: 9, y: 11.5 },
        {x: 10, y: 12 }
        ]

        const data2 = [
            {x: -2, y: 18 },
            //{x: -1, y: 10 },
           // {x: 0, y: 12 },
            {x: 4, y: -2 },
            //{x: 8, y: 12 },
           // {x: 9, y: 13.5 },
            {x: 10, y: 18 }
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
