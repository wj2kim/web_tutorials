import { createStore } from './redux';



// store.person = {} 같은 동적 바인딩이 안되게 해야한다

const INCREMENT = 'increment';
const RESET = 'reset';


function reducer(state = {} , action ) {
    if( action.type === INCREMENT){
        return { 
            ...state, // 새로운 state객체를 복사 
            // abc: 'OK' // state 에 abc 값을 overwrite
            count: state.count ? state.count + 1 : 1
        }
        // state.abc = 'OK';
    }else if(action.type === REST){
        return {
            ...state,
            count: action.resetCount,
        }
    }

    return state;
}


const store = createStore(reducer)

function update() {
    console.log(store.getState());
}

store.subscribe(update);


function actionCreator(type, data){
    return { 
        ...data,
        type: type,
    }
}

function increment() {
    store.dispatch(actionCreator(INCREMENT));
}

function reset() {
    store.dispatch(actionCreator(REST, { resetCount: 10 }));
}


increment();
increment();
increment();
increment();

reset();



