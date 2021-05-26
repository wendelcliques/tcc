import {useState, useCallback} from 'react'
import { useFocusEffect } from '@react-navigation/native'

import {
    getEntries,
    getEntries1,
    addEntry,
    updateEntry,
    deleteEntry,
} from '../services/Entries';

const useEntries = (categoria) => {
    const [entries, setEntries] = useState([]);
    const [entries1, setEntries1] = useState([]);

    useFocusEffect(
        useCallback(() => {
            const loadEntries = async () => {
                const data = await getEntries(categoria);
                setEntries(data);
            };


            const loadEntries1 = async () => {
                const data = await getEntries1(categoria);
                setEntries1(data);
            };


            loadEntries();
            loadEntries1();

        }, [categoria]),
    );
    return [entries, entries1, addEntry, updateEntry, deleteEntry];
};

export default useEntries;
