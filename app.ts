import { contadorReducer } from "./contador/contador.reducer";
import { Reducer, Action } from './ngrx-fake/ngrx';
import { incrementarAction } from './contador/contador.actions';

/**
 * @description Simple manual store, dispatch actions and return the new state
 */
class Store<T> {
    private state: T;

    constructor(private reducer: Reducer<T>, state: T) {
        this.state = state;        
    }

    getState(){
        return this.state;
    }

    dispatch(action: Action){
        this.state = this.reducer(this.state, action);
    }
}

const store = new Store(contadorReducer, 10);
console.log(store.getState());
store.dispatch(incrementarAction);
console.log(store.getState());
store.dispatch(incrementarAction);
console.log(store.getState());

