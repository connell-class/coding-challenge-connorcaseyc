import React from 'react';
import { Link } from 'react-router-dom';

export class Landing extends React.Component {
    render() {
        return (
            <div>
                <h3>Landing Page</h3>
                <Link to='glists'>Grocery Lists</Link>
                <br/>
                <Link to='chooselist'>Choose List</Link>
                <br/>
                <Link to='additem'>Add Item to Current List</Link>
                <br/>
                <Link to='items'>View All Items</Link>
            </div>
        )
    }
}