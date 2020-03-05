import React from 'react';
import { IGroceryList } from '../../model/IGroceryList';

export interface ILR {
    list: IGroceryList
}

export const GLDisplayRow:React.FC<ILR> = (props:ILR) => {
    return (
        <>
            <tr>
                <td key={1}>{props.list.gl_id}</td>
                <td key={2}>{props.list.listname}</td>
            </tr>
        </>
    )
}
export default GLDisplayRow;