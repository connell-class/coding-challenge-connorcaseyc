import { connect } from 'react-redux';
import { SubmitItem } from './SubmitItem';
import { IState } from '../../reducers';

const mapStateToProps = (state: IState) => {
    return {
        list: state.listState.currentList
    }
}

export default connect(mapStateToProps)(SubmitItem)