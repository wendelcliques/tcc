import {useState, useCallback} from 'react'
import { useFocusEffect } from '@react-navigation/native'

import {
    getEntries,
    addEntry,
    updateEntry,
    deleteEntry,
} from '../services/Entries';

const useEntries = (categoria) => {
    const [entries, setEntries] = useState([]);

    useFocusEffect(
        useCallback(() => {
            const loadEntries = async () => {
                const data = await getEntries(categoria);
                setEntries(data);
            };
            loadEntries();

        }, [categoria]),
    );
    return [entries, addEntry, updateEntry, deleteEntry];
};

export default useEntries;
