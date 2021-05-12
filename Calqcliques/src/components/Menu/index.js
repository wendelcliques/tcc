import React from 'react'
import Svg, {Ellipse, Polygon} from 'react-native-svg'
import { View, Text, StyleSheet } from 'react-native'

import Container from '../Container'

const Menu = () => {
    return (
        <Container
        title="Menu"
        >
        <View>
            <Svg height="100" width="100" >
                <Polygon
                points="10,10 15,50 95,50"
                fill="lime"
                >

                </Polygon>
                <Ellipse
                    cx="55"
                    cy="55"
                    rx="40"
                    ry="5"
                    stroke="purple"
                    strokeWidth="2"
                    fill="yellow"
                />
            </Svg>
            </View>
        </Container>
    )
}

export default Menu
