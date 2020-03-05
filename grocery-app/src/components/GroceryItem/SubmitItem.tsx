import React, { SyntheticEvent } from 'react';
import { addToList } from '../../utilities/api';
import { Form, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { history } from '../../utilities/history';

interface ISubmitItemProps {
    list: any
}

interface ISubmitItemState {
    item: string,
    itemtype: any
}

export class SubmitItem extends React.Component<ISubmitItemProps, ISubmitItemState> {
    constructor(props:any) {
        super(props);
        this.state = {
            item:'',
            itemtype: ''
        };
    }

    updateItem = (event:any) => {
        this.setState({
            ...this.state, 
            item: event.target.value
        });
    }

    updateItemType = (event:any) => {
        this.setState({
            ...this.state,
            itemtype: event.target.value
        });
    }

    submitItem = async (event:SyntheticEvent) => {
        event.preventDefault();
        addToList({
            gi_id: 0,
            item: this.state.item,
            itemtype: this.state.itemtype,
            g_items: this.props.list
        });
        history.push('/items');
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.submitItem}>
                    <Input 
                        required
                        type="select"
                        placeholder="Select Type"
                        value={this.state.itemtype}
                        onChange={this.updateItemType}>
                            <option>Select Type</option>
                            <option value="FOOD">Food</option>
                            <option value="COOKWARE">Cookware</option>
                            <option value="ESSENTIALS">Essentials</option>
                            <option value="ELECTRONICS">Electronics</option>
                            <option value="CLOTHING">Clothing</option>
                            <option value="OTHER">Other</option>
                    </Input>

                    <br/>

                    <Input 
                        required
                        type="text"
                        placeholder="Item"
                        value={this.state.item}
                        onChange={this.updateItem} />

                    
                    <Input type="submit" value="Submit"/>
                </Form>
                <Link to='/'>Landing</Link>
            </div>
        )
    }
}
export default SubmitItem;