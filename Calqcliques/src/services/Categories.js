import {Alert} from 'react-native';

import firestore from '@react-native-firebase/firestore';

export const getCategories = async () => {
    let querySnapshot;

    querySnapshot = await firestore()
    .collection('categories')
    .orderBy('order')
    .get();

    let categories = querySnapshot.docs.map(documentSnapshot => {
        return {...documentSnapshot.data(), id: documentSnapshot.id};
    });

    return categories;
};

export const getsubCategories = async (category) => {
    let querySnapshot;

    querySnapshot = await firestore()
    .collection('categories')
    .where('name', '==', category)
    .orderBy('order')
    .get();

    let subcategories = querySnapshot.docs.map(documentSnapshot => {
        return {...documentSnapshot.data(), id: documentSnapshot.id};
    });

    return subcategories;
};

export const addCategory = async category => {
    let data = {};

    console.log('addCategory :: value: ', JSON.stringify(category));

    try {
        data = {
            name: category.name,
            subcategory: subcategory || "",
            
        };

        await firestore()
        .collection('categories')
        .add(data);
    } catch (error) {
        console.error(
            'addCategory :: erro ao salvar categoria',
            JSON.stringify(data),
            JSON.stringify(error),
        );
        Alert.alert('Erro', 'Houve um erro ao salvar essa categoria.');
    }

    return data;
};

export const updateCategory = async category => {
    let data = {};

    console.log('updateCategory :: value: ', JSON.stringify(category));

    try {
        data = {
            name: category.name,
            subcategory: subcategory || "",
            
        };

        await firestore()
        .collection('categories')
        .doc(category.id)
        .update(data);
    } catch (error) {
        console.error(
            'updateCategory :: erro ao atualizar categoria',
            JSON.stringify(data),
            JSON.stringify(error),
        );
        Alert.alert('Erro', 'Houve um erro ao atualizar essa categoria.');
    }

    return data;
};

export const deleteCategory = async category => {
    

    console.log('deleteCategory :: value: ', JSON.stringify(category));

    try {
        

        await firestore()
        .collection('categories')
        .doc(category.id)
        .delete();
    } catch (error) {
        console.error(
            'deleteCategory :: erro ao apagar categoria',
            JSON.stringify(data),
            JSON.stringify(error),
        );
        Alert.alert('Erro', 'Houve um erro ao apagar essa categoria.');
    }


};