import {Alert} from 'react-native'
import firestore from '@react-native-firebase/firestore'

export const getEntries = async (categoria) => {
    let querySnapshot;
    querySnapshot = await firestore()
    .collection('entries')
    .where('categoria', '==', categoria? categoria : "Bem vindo")
    .orderBy('order')
    .get();

    let entries = querySnapshot.docs.map(documentSnapshot => {
        return {...documentSnapshot.data(), id: documentSnapshot.id};
    });

    console.log('getEntry :: valor: ', JSON.stringify(entries))
    console.log('getEntry:: categoria', categoria);
    ;

    return entries;
};



export const getEntries1 = async (categoria) => {
    let querySnapshot;
    querySnapshot = await firestore()
    .collection('entries1')
    .where('categoria', '==', categoria? categoria : "Bem vindo")
    .orderBy('order')
    .get();

    let entries1 = querySnapshot.docs.map(documentSnapshot => {
        return {...documentSnapshot.data(), id: documentSnapshot.id};
    });

    console.log('getEntry :: valor1: ', JSON.stringify(entries1))
    console.log('getEntry:: categoria', categoria);
    ;

    return entries1;
};



export const addEntry = async entry => {
    let data = {};
    console.log('addEntry :: valor: ', JSON.stringify(entry));

    try {
        data = {
            termo1: entry.termo1,

        };

        await firestore()
        .collection('entries')
        .add(data);
        
    } catch (error) {
       console.error(
        'addEntry :: error on save object: ',
        JSON.stringify(data),
        JSON.stringify(error),
       ) ;
       Alert.alert('Erro', 'Houve um erro ao salvar essas informações.');
    }
    return data;
};

export const updateEntry = async entry => {
    let data = {};
    console.log('addEntry :: valor: ', JSON.stringify(entry));

    try {
        data = {
            termo1: entry.termo1,

        };

        await firestore()
        .collection('entries')
        .doc(entry.id)
        .update(data);
        
    } catch (error) {
       console.error(
        'updateEntry :: error on save object: ',
        JSON.stringify(data),
        JSON.stringify(error),
       ) ;
       Alert.alert('Erro', 'Houve um erro ao atualizar essas informações.');
    }
    return data;
};


export const deleteEntry = async entry => {
   

    try {
      
        await firestore()
        .collection('entries')
        .doc(entry.id)
        .delete();
        
    } catch (error) {
       console.error(
        'deleteEntry :: error on delete object: ',
        JSON.stringify(data),
        JSON.stringify(error),
       ) ;
       Alert.alert('Erro', 'Houve um erro ao apagar essas informações.');
    }
   
};



