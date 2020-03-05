import React, { SyntheticEvent } from 'react'; 
import { Form, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

export default interface IChooseState {
    gl_id: number,
    listname: string,
    g_items: any[] 
}

interface IChooseProps {
    updateCurrentList: (n:number) => void
    listMessage: string
}

export class ChooseGL extends React.Component<IChooseProps, IChooseState> {
    constructor(props: any) {
        super(props) 
        this.state = {
            gl_id: 0,
            listname: '',
            g_items: []
        }
    }

    updateGLID = (event:any) => {
        this.setState({
            gl_id: event.target.value
        })
    }

    submitGList = async (event:SyntheticEvent) => {
        event.preventDefault();
        this.props.updateCurrentList(this.state.gl_id);
        
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.submitGList}>
                    <Input 
                        required
                        type="number"
                        placeholder="Enter the Grocery List ID"
                        value={this.state.gl_id}
                        onChange={this.updateGLID} />
                    <Input type="submit" placeholder="Submit"/>
                </Form>
                <Link to='/'>Landing</Link>
            </div>
        )
    }
}