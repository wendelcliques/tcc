import React from 'react'
import { 
    Modal,
    View,
     Text,
    StyleSheet } from 'react-native'

import useEntries from '../../hooks/useEntries'

import Colors from '../../styles/Colors'

const TermoModal = ({isVisible}) => {
    const [entries] = useEntries();
    return (
        <Modal animationType='slide' transparent={true} visible={isVisible}>
        <View>
            <Text></Text>
        </View>
        </Modal>
     
    )
}

export default TermoModal
