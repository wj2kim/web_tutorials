function createStore(reducer){
    let state; // 이 스토어 변수는 클로저로 캡슐화를 시켜줄거임 
    const listeners = [];

    const getState = () => ({...state}); // state 의 복사본을 줄거임

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(f => f());
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