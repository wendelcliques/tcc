import React, {useState} from 'react'
import { 
    Modal,
    View,
     Text,
    StyleSheet, 
    TouchableOpacity} from 'react-native'

import useEntries from '../../hooks/useEntries'

import Colors from '../../styles/Colors'

const TermoModal = ({entry, isVisible, onCancel}) => {
    const [entries] = useEntries();

    const [entry1, setEntry1] = useState(entry);

    console.log('Termomodal :: entry1', (entry));
    return (
        <Modal animationType='slide' transparent={false} visible={isVisible}>
        <View>
            <Text style={styles.modalItemText}>v(t) é a função do volume do cone que será utilizada para calcular a taxa de variação{entry1}</Text>

            <TouchableOpacity
            onPress={onCancel}>
                <Text >sair {entry}</Text>
            </TouchableOpacity>
        </View>
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
