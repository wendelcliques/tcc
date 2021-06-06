import React, {useState} from 'react'
import { 
    Modal,
    View,
    FlatList,
     Text,
    StyleSheet, 
    TouchableOpacity} from 'react-native'

    import ModalContainer from '../ModalContainer'

    import useCategories from '../../hooks/useCategories';

const MenuModal = ({ isVisible, onCancel, onConfirm}) => {

    const [categories ] = useCategories();

    const [escolha, setEscolha] = useState("Bem vindo");
    const onCategoryClosePress = () => {
        {onCancel}
    }

console.log('MenuModal:: escolha: ', escolha)
const onConfirmButton = () => {
    
    onCancel();
};


    return (
        <Modal animationType='slide' transparent={true} visible={isVisible }
        // is visible recebe o modal visible do menu
        >

        <ModalContainer
        
        >
            <View>

<FlatList
data={categories}
keyExtractor={item => item.id}
renderItem={({item}) => (
    <TouchableOpacity
    onPress={
        
        () => onConfirm(item)
    
    }>
        <Text>
            {item.name}
        </Text>
    </TouchableOpacity>
)}
/>


                
            

            <TouchableOpacity
            onPress={onCancel}>
                <Text ></Text>
            </TouchableOpacity>
            </View>
        </ModalContainer>
        <View style={{
   flex:1,
   //color: "green", //entries.termo1dcor,
   //backgroundColor: "blue",
}}>
        <TouchableOpacity
        style={{
            flex:1,
            //color: "green", //entries.termo1dcor,
            //backgroundColor: "blue",
         }}
            onPress={onCancel}>
                <Text ></Text>
            </TouchableOpacity>
            </View>
   
        </Modal>
    )
}

export default MenuModal
