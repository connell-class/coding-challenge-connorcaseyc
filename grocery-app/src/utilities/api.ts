import { axiosConfig } from './axiosConfig';
import { IGroceryItem } from '../model/IGroceryItem';

export const getGroceryLists = () => {
    return axiosConfig.get('grocerylist/all');
}

export const getGroceryItems = () => {
    return axiosConfig.get('groceryitem/all');
}

export const chooseList = async (gl_id: number) => {
    try {
        const response = await axiosConfig.post('grocerylist/choose', {
            gl_id
        })
        if (response.status === 200) {
            const body = await response.data
            console.log(body)
            return {
                body,
                listMessage: 'List Loaded'
            }
        } else {
            return {
                listMessage: 'Something Went Wrong',
                body: null
            }
        }
    } catch (e) {
        console.log(e);
        return {
            listMessage: 'Something Went Wrong'
        }
    }
}

export const addToList = async (body: IGroceryItem) => {
    return axiosConfig.post('groceryitem/new', body);
}
