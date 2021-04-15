import {Alert} from 'react-native'
import firestore from '@react-native-firebase/firestore'

export const getEntries = async () => {
    let querySnapshot;
    querySnapshot = await firestore()
    .collection('entries')
    .orderBy('order')
    .get();

    let entries = querySnapshot.docs.map(documentSnapshot => {
        return {...documentSnapshot.data(), id: documentSnapshot.id};
    });

    return entries;
};