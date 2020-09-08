export function createStore(reducer) {
    let state; // closure 방식으로 state를 보호한다 
    const listeners = [];

    const getState = () =>  ({...state}) ; // state의 복사본을 리턴한다.


    // dispatch -> UI 에서 변화된 값을 지켜본다
    const dispatch = (action) => {
        state  = reducer(state, action);
        listeners.forEach(f => f());
    } 

    const subscribe = (f) => {
        listeners.push(f);
    }


    return {
        getState,
        dispatch,
        subscribe
    }
}