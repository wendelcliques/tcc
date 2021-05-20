import React, {useState} from 'react'
import { 
    Modal,
    View,
     Text,
    StyleSheet, 
    TouchableOpacity} from 'react-native'

    import ModalContainer from '../ModalContainer'

const MenuModal = ({ isVisible, onCancel, onConfirm}) => {

    const [escolha, setEscolha] = useState("Bem vindo");
    const onCategoryClosePress = () => {
        {onCancel}
    }

console.log('MenuModal:: escolha: ', escolha)



    return (
        <Modal animationType='slide' transparent={true} visible={isVisible}>

        <ModalContainer
        
        >
            <View>
                <TouchableOpacity 
                onPress={() => {
                    setEscolha("Bem vindo");
                    onConfirm(escolha);
                    {onCancel}

                }}
                >
                <Text>Bem Vindo!</Text>
                </TouchableOpacity>
                <TouchableOpacity
                 onPress={() => {
                    setEscolha("taxa de variação");
                    onConfirm(escolha);
                    onCategoryClosePress();
                }}
                >
                <Text>Taxa de variação</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => {
                   
                    setEscolha("ondas");
                    onConfirm(escolha);
                    
                }}
                >
                <Text>Ondas</Text>
                </TouchableOpacity>
            

            <TouchableOpacity
            onPress={onCancel}>
                <Text >sair </Text>
            </TouchableOpacity>
            </View>
        </ModalContainer>

        </Modal>
    )
}

export default MenuModal
