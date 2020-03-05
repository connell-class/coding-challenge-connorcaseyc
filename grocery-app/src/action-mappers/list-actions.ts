import { chooseList } from '../utilities/api';

export const listTypes = {
    SUCCESS: 'LIST_CHOICE_SUCCESSFUL',
    UNSUCCESSFUL: 'LIST_CHOICE_UNSUCCESSFUL'
}

export const updateCurrentList = (gl_id:number) => async (dispatch:any) => {
    let response = await chooseList(gl_id)
    if(response.body) {
        dispatch({
            type:listTypes.SUCCESS,
            payload: {
                currentList:response.body
            }
        })
    } else {
        dispatch({
            type:listTypes.UNSUCCESSFUL,
            payload: {
                listMessage:response.listMessage
            }
        })
    }
}