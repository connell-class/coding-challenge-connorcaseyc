import React, { useState, useEffect } from 'react';
import { getGroceryLists } from '../../utilities/api';
import { IGroceryList } from '../../model/IGroceryList';
import { GLDisplayRow } from './GLDisplayRow';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';

export const GLDisplay:React.FC<any> = (props:any) => {
    const [gList, setGList] = useState([]);
    useEffect(() => {
        getGroceryLists().then(r=>setGList(r.data));
    }, [gList.length]);

    return (
        <div>
            <Table>
                <tbody>
                    {gList.map((r:IGroceryList) => <GLDisplayRow key={r.gl_id} list={r}/>)}
                </tbody>
            </Table>
            <Link to='/'>Landing</Link>
        </div>
    )
}
export default GLDisplay;