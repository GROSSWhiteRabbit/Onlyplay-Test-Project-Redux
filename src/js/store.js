import {createStore} from 'redux';
import reducer from './reducer';

const store = createStore(reducer);
const {dispatch, subscribe, getState} = store;

export {dispatch, subscribe, getState};