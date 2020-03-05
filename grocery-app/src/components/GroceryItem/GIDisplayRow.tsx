import React from 'react';
import { IGroceryItem } from '../../model/IGroceryItem';

export interface IIR {
    item: IGroceryItem
}

export const GIDisplayRow:React.FC<IIR> = (props:IIR) => {
    return(
        <>
            <tr>
                <td key={1}>{props.item.gi_id}</td>
                <td key={2}>{props.item.item}</td>
                <td key={3}>{props.item.itemtype}</td>
                {/* <td key={4}>{props.item.g_items.}</td> */}
            </tr>
        </>
    )
}
export default GIDisplayRow;