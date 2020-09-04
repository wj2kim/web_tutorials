import { createStore } from './excercise-redux';

const store = createStore();

const INCREMENT = 'increment';
const RESET = 'RESET';

function reducer(state, action) {
    if(action.type === INCREMENT){
        return {
            ...state,
            count: state.count? state.cout + 1 : 1
        }
    }else if ( action.type === RESET){
        return {
            ...state,
            count: action.resetCount
        }
    }
    return state;
}

function update() {
    console.log(store.getState());
}

store.subscribe(update);


function actionCreator(type, data){
    return {
        ...data,
        type
    }
}

function increment() {
    store.dispatch(actionCreator(INCREMENT));
}

function reset() {
    store.dispatch(actionCreator(RESET, { resetCount: 10 }));
}


increment();
increment();
increment();
increment();
increment();