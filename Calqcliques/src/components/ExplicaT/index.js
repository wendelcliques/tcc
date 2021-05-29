import React from 'react'
import { View, Text } from 'react-native'

import Container from '../Container'

import ExplicaList from './ExplicaList'
import MenuCentral from './MenuCentral'

import useEntries from '../../hooks/useEntries'

const ExplicaT = ({categoria,
    onMenuCentralPress,
    onMenuCentralPress1,
    onMenuCentralPress2,
}) => {
    const [entries] = useEntries(categoria);
    return (
        <Container 
        title="Explicação Teórica">
        <View>
            <MenuCentral 
            onMenuCentralPress={onMenuCentralPress}

            onMenuCentralPress1={onMenuCentralPress1}
            onMenuCentralPress2={onMenuCentralPress2}
            />
            <ExplicaList data={entries} />
        </View>
        </Container>
    )
}

export default ExplicaT
