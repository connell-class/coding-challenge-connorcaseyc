import { combineReducers } from 'redux';
import { IGroceryList } from '../model/IGroceryList';
import { listReducer } from './list-reducer';

export interface IGListState {
    currentList: IGroceryList,
    listMessage: string
}

export interface IState {
    listState:IGListState
}

export const state = combineReducers<IState>({
    listState:listReducer
})