import { createStore } from './exRedux.js';


const INCREMENT = 'increment';

// reducer state 를 복사하는 동시에 업데이트 되는 값을 overwrite 한다.
const reducer = (state = {}, action) => {
    switch ( action.type ) {
        case INCREMENT : 
            return { 
                ...state,
                count: state.count ? state.count + 1 : 1
            }
    }
    return state;
}

const store = createStore(reducer);

const update = () => {
    console.log(store.getState());
}

store.subscribe(update);

// action 을 반환하는 actionCreator
const actionCreator = (type, data) => {
    return {
        ...data,
        type
    }
}

const increment = () => {
    store.dispatch(actionCreator(INCREMENT));
}


increment();
increment();
increment();
increment();

