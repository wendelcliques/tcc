import React from 'react'
import Svg, {Ellipse, Polygon} from 'react-native-svg'
import { View, Text, StyleSheet } from 'react-native'

import Container from '../Container'
import EntryList from '../EntryList'

const Menu = () => {
    return (
        <Container
        title="Menu"
        >
        <View style={{backgroundcolor: "red", 
        flexDirection: 'row'}}>
            <Svg height="80" width="100" >
                <Polygon
                points="54,0 15,62 95,62"
                stroke="purple"
                strokeWidth="2"
                fill="rgba(99, 99, 00, 1.0)"
                >

                </Polygon>
                <Ellipse
                    cx="55"
                    cy="65"
                    rx="40"
                    ry="10"
                    stroke="purple"
                    strokeWidth="2"
                    fill="rgba(79, 79, 00, 1.0)"
                />

<Polygon
                points="54,7 24,62 85,62"
                stroke="purple"
                strokeWidth="2"
                fill="rgba(00, 00, 99, 0.2)"
                >

                </Polygon>
                <Ellipse
                    cx="55"
                    cy="65"
                    rx="30"
                    ry="7"
                    stroke="purple"
                    strokeWidth="2"
                    fill="rgba(00, 00, 50, 01.0)"
                />
            </Svg>
            <EntryList />
            </View>
        </Container>
    )
}

export default Menu
