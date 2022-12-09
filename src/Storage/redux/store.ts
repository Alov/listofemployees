import {createStore} from "redux";

const defaultState = {
    currentEmployeer: {}
}

const reducer = (state:any = defaultState, action:any) => {
    switch (action.type) {

        case "SET_CURRENT_EMP":
            return {...state, currentEmployeer: action.payload.currentEmployeer}
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;