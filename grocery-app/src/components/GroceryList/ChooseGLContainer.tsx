import { connect } from 'react-redux';
import { IState } from '../../reducers';
import { updateCurrentList } from '../../action-mappers/list-actions';
import { ChooseGL } from './ChooseGL';

const mapStateToProps = (state:IState) => {
    return {
        listMessage:state.listState.listMessage
    }
}

const mapDispatchToProps = {
    updateCurrentList 
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseGL)