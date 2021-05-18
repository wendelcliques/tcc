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

const TermoModal = ({termo1dd, route, navigation, isVisible, onCancel}) => {
   /* const entry = route.params?.entry
    ? route.params.entry
    : {
        id: null,
        termo1definicao: null,
        termo2definicao: null,
        termo3definicao: null,
        termo4definicao: null,
        termo5definicao: null,
        termo6definicao: null,
        termo7definicao: null,
        termo8definicao: null,
        termo9definicao: null,
        termo10definicao: null,
    };
*/
    console.log('Termomodal :: termo1dd', (termo1dd));

    const [entries] = useEntries();

    //const [entry1, setEntry1] = useState(entry);

   // const [termo1d, setTermo1d] = useState(entry.termo1definicao);
  /*  const [termo2d, setTermo2d] = useState(entry.termo2definicao);
    const [termo3d, setTermo3d] = useState(entry.termo3definicao);
    const [termo4d, setTermo4d] = useState(entry.termo4definicao);
    const [termo5d, setTermo5d] = useState(entry.termo5definicao);
    const [termo6d, setTermo6d] = useState(entry.termo6definicao);
    const [termo7d, setTermo7d] = useState(entry.termo7definicao);
    const [termo8d, setTermo8d] = useState(entry.termo8definicao);
    const [termo9d, setTermo9d] = useState(entry.termo9definicao);
    const [termo10d, setTermo10d] = useState(entry.termo10definicao);*/

    
    return (
        <Modal animationType='slide' transparent={true} visible={isVisible}>
        <Container>     
        <View>
            
            <Text>{termo1dd}</Text>
            < TermoModalList data={entries} />

            <TouchableOpacity
            onPress={onCancel}>
                <Text >sair </Text>
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
