import { IGListState } from '.';
import { listTypes } from '../action-mappers/list-actions';

const initialState:IGListState = {
    currentList: {
        gl_id: 0,
        listname: '',
        g_items: []
    },
    listMessage: ''
}

export const listReducer = (state = initialState, action:any) => {
    switch(action.type) {
        case listTypes.SUCCESS:{
            return {
                ...state,
                currentList:action.payload.currentList,
                listMessage: 'List has loaded '
            }
        }
        case listTypes.UNSUCCESSFUL: {
            return {
                ...state,
                listMessage:action.payload.listMessage
            }
        } 
        default:
            return state;
    }
}