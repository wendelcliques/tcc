import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Chart, VerticalAxis, HorizontalAxis, Line } from 'react-native-responsive-linechart'

const EntrySummaryChart = ({data1, data2}) => {
    return (
        <View>
            <Chart
                style={{height: 100, width: '50%', backgroundColor: '#eee'}}
                xDomain={{ min: -2, max: 10 }}
                yDomain={{ min: -10, max: 20 }}
                padding={{ left: 20, top: 10, bottom: 10, right: 10 }}
            >
                <VerticalAxis tickValues={[-8, -4, 0, 4, 8, 12, 16, 20]} />
                <HorizontalAxis tickCount={10} />
                <Line data={data1} smoothing="none" theme={{ stroke: { color: 'red', width: 1}}} />
                <Line data={data2} smoothing="cubic-spline" theme={{ stroke: { color: 'blue', width: 1}}} />
            </Chart>
        </View>
    )
}

export default EntrySummaryChart
