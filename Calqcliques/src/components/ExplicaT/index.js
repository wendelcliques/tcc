import React from 'react'
import { View, Text } from 'react-native'

import Container from '../Container'

import ExplicaList from './ExplicaList'

import useEntries from '../../hooks/useEntries'

const ExplicaT = () => {
    const [entries] = useEntries();
    return (
        <Container 
        title="Explicação Teórica">
        <View>
            
            <ExplicaList data={entries} />
        </View>
        </Container>
    )
}

export default ExplicaT
