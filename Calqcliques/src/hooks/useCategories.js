import {useEffect, useState} from 'react';

import {
getCategories,
addCategory,
updateCategory,
deleteCategory,
} from '../services/Categories';

const useCategories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const loadCategories = async () => {
            const data = await getCategories();
            setCategories(data);
        };
            loadCategories();
    }, []);

    return [categories, addCategory, updateCategory, deleteCategory]
};

export default useCategories;