import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native'

import { Chart, VerticalAxis, HorizontalAxis, Line } from 'react-native-responsive-linechart'

const EntrySummaryTaxa = ({data1, data2, 
   

}) => {
    const [a, setA] = useState(4);
    return (
        
        <View style={{
            //paddingLeft: 20,
            flexDirection: 'row',
        }}>
            <Chart
                style={{height: 100, width: '50%', backgroundColor: '#eee'}}
                xDomain={{ min: -15, max: 15 }}
                yDomain={{ min: -680, max: 680 }}
                padding={{ left: 20, top: 10, bottom: 10, right: 10 }}
            >
                <VerticalAxis tickValues={[-8, -4, 0, 4, 8, 12, 16, 20]} />
                <HorizontalAxis tickCount={5} />
                <Line data={data1} smoothing="none" theme={{ stroke: { color: 'red', width: 1}}} />
                <Line data={data2} smoothing="cubic-spline" theme={{ stroke: { color: 'blue', width: 1}}} />
               
            </Chart>



        </View>
    )
}

export default EntrySummaryTaxa