import { createStore } from 'redux';
import reducer from './reducer';


const store = createStore(reducer) //this is HOF 

export default store;