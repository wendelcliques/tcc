import { getFocusedRouteNameFromRoute } from '@react-navigation/core';
import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native'

import { Chart, VerticalAxis, HorizontalAxis, Line } from 'react-native-responsive-linechart'

const EntrySummaryChart = ({data1, data2, data3, data4, data5, data6,
    ondas0press,
ondas1press,
ondas2press,
ondas3press,
ondas1,

}) => {
    const [a, setA] = useState(4);
    return (
        
        <View style={{
            //paddingLeft: 20,
            flexDirection: 'row',
        }}>
            <Chart
                style={{height: 100, width: '50%', backgroundColor: '#eee'}}
                xDomain={{ min: -5, max: 90 }}
                yDomain={{ min: -200, max: 200 }}
                padding={{ left: 20, top: 10, bottom: 10, right: 10 }}
            >
                <VerticalAxis tickValues={[-8, -4, 0, 4, 8, 12, 16, 20]} />
                <HorizontalAxis tickCount={5} />
                <Line data={data1} smoothing="none" theme={{ stroke: { color: 'red', width: 1}}} />
                <Line data={data2} smoothing="cubic-spline" theme={{ stroke: { color: 'blue', width: 1}}} />
                <Line data={data3} smoothing="cubic-spline" theme={{ stroke: { color: 'green', width: 1}}} />
                <Line data={data4} smoothing="cubic-spline" theme={{ stroke: { color: 'orange', width: 1}}} />
                <Line data={data5} smoothing="cubic-spline" theme={{ stroke: { color: 'red', width: 1}}} />
                <Line data={data6} smoothing="cubic-spline" theme={{ stroke: { color: 'blue', width: 1}}} />
            </Chart>

            <View>

                <Text> Estudo comparativo:</Text>
                <View style={{
            flexDirection: 'row',
            paddingLeft: 20,
        }}>
<Text
style={{
    color: "green",
}}

>2x cos x²</Text>
<TouchableOpacity
onPress={() => {
    ondas0press && ondas0press();
   }}
>
    <Text style={{
            //flex: 1,
            //paddingLeft: 20,
            borderWidth: 1,
            borderRadius: 5,
            marginLeft: 20,
            backgroundColor: ondas1 === "ondas0"? "rgba(99,80,00, 1.0)" : "rgba(80,80,80, 0.5)",
    }}
            >{ondas1 === "ondas0" ? "Ativo" : "Ativar"}</Text>
</TouchableOpacity>
            </View>

            <View style={{
            flexDirection: 'row',
            paddingLeft: 20,
        }}>
<Text
style={{
    color: "orange",
}}>cos x²</Text>
<TouchableOpacity
onPress={() => {
    ondas1press && ondas1press();
   }}
>
    <Text style={{
            //flex: 1,
            //paddingLeft: 20,
            borderWidth: 1,
            borderRadius: 5,
            marginLeft: 20,
            backgroundColor: ondas1 === "ondas1"? "rgba(99,80,00, 1.0)" : "rgba(80,80,80, 0.5)",
    }}
            >{ondas1 === "ondas1" ? "Ativo" : "Ativar"}</Text>
</TouchableOpacity>
            </View>

         



            <View style={{
            flexDirection: 'row',
            paddingLeft: 20,
        }}>
            <Text
            style={{
                color: "red",
            }}>cos x</Text>
<TouchableOpacity
onPress={() => {
    ondas2press && ondas2press();
   }}
>
    <Text style={{
            //flex: 1,
            //paddingLeft: 20,
            borderWidth: 1,
            borderRadius: 5,
            marginLeft: 20,
            backgroundColor: ondas1 === "ondas2"? "rgba(99,80,00, 1.0)" : "rgba(80,80,80, 0.5)",
    }}
            >{ondas1 === "ondas2" ? "Ativo" : "Ativar"}</Text>
</TouchableOpacity>
            </View>

            <View style={{
            flexDirection: 'row',
            paddingLeft: 20,
        }}>
            <Text
            style={{
                color: "blue",
            }}>2x cos x</Text>
<TouchableOpacity
onPress={() => {
    ondas3press && ondas3press();
   }}
>
    <Text style={{
            //flex: 1,
            //paddingLeft: 20,
            borderWidth: 1,
            borderRadius: 5,
            marginLeft: 20,
            backgroundColor: ondas1 === "ondas3"? "rgba(99,80,00, 1.0)" : "rgba(80,80,80, 0.5)",
    }}
            >{ondas1 === "ondas3" ? "Ativo" : "Ativar"}</Text>
</TouchableOpacity>
            </View>

            </View>

        </View>
    )
}

export default EntrySummaryChart
