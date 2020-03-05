import React, { useState, useEffect } from 'react';
import { getGroceryItems } from '../../utilities/api';
import { IGroceryItem } from '../../model/IGroceryItem';
import GIDisplayRow from './GIDisplayRow';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';

export const GIDisplay:React.FC<any> = (props:any) => {
    const [iList, setIList] = useState([]);
    useEffect(() => {
        getGroceryItems().then(r=>setIList(r.data));
    }, [iList.length]);

    return (
        <div>
            <Table>
                <tbody>
                    {iList.map((r:IGroceryItem) => <GIDisplayRow key={r.gi_id} item={r}/>)}
                </tbody>
            </Table>
            <Link to='/'>Landing</Link>
        </div>
    )
}
export default GIDisplay;