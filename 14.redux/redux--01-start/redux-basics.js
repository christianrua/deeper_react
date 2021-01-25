const redux = require('redux');
const creaStore = redux.createStore

const initialState = {
    counter: 0
}

//Reduce
const rootReducer = (state = initialState, action) => {
    if(action.type == 'INC_COUNTER'){
        
        return {
            ...state,
            counter:state.counter + 1
        };
    }

    if(action.type == 'ADD_COUNTER'){
        
        return {
            ...state,
            counter:state.counter + action.value
        };
    }
    return state;
};

//Store
const store = redux.createStore(rootReducer);
console.log(store.getState());

// subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});


//Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());


