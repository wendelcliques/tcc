import React from 'react'
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

    console.log('Termomodal :: entry', JSON.stringify(entries));
    return (
        <Modal animationType='slide' transparent={false} visible={isVisible}>
        <View>
            <Text style={styles.modalItemText}>modal{entry.termo1}</Text>

            <TouchableOpacity
            onPress={onCancel}>
                <Text >sair {entry.termo1}</Text>
            </TouchableOpacity>
        </View>
        </Modal>
     
    )
}

const styles = StyleSheet.create({
    modalItemText: {
        fontSize: 22,
        color: Colors.orange,
    }
})

export default TermoModal
