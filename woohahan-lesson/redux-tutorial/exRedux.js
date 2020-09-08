export const createStore = (reducer) => {
    let state; // closure 방식으로 밖에서 동적 바인딩이나 값을 변화 시킬 수 없도록 은닉화 해야 햠.
    const listeners = [];
    
    const getState = () => ({...state}); // 꼭 state 의 복사본을 줘야 함

    // dispatch 는 UI 에서 변경된 값을 지켜본다. 
    // reducer 은 반드시 action을 인자로 받는 dispatch를 이용해 호출해야한다. 
    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(fn => fn());
    }

    const subscribe = (fn) => {
        listeners.push(fn);
    }

    return {
        getState,
        dispatch,
        subscribe
    } 
}