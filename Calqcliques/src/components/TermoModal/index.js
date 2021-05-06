import React, {useState} from 'react'
import { 
    Modal,
    View,
     Text,
    StyleSheet, 
    TouchableOpacity} from 'react-native'

 import Container from '../Container'  
 
 import TermoModalList from './TermoModalList'

import useEntries from '../../hooks/useEntries'

import Colors from '../../styles/Colors'
import ExplicaList from '../ExplicaT/ExplicaList'

const TermoModal = ({entry, isVisible, onCancel}) => {
    const [entries] = useEntries();

    const [entry1, setEntry1] = useState(entry);

    console.log('Termomodal :: entry1', (entry));
    return (
        <Modal animationType='slide' transparent={true} visible={isVisible}>
        <Container>     
        <View>
            

            < TermoModalList data={entries} />

            <TouchableOpacity
            onPress={onCancel}>
                <Text >sair {entry}</Text>
            </TouchableOpacity>
        </View>
        </Container> 
        </Modal>
     
    )
}

const styles = StyleSheet.create({
    modalItemText: {
        fontSize: 22,
        color: Colors.black,
    }
})

export default TermoModal
