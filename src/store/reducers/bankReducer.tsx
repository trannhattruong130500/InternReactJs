import {Action} from "../actions/index"
import { actionTypes } from "../action-types";

const initailState = 0;


const reducer = (state : number = initailState, action: Action) =>{
    switch (action.type) {
        case actionTypes.DEPOSIT:
            return state + action.payload
        case actionTypes.WITHDRAW:
            return state - action.payload
        case actionTypes.BANKRUPT:
            return 0
        default:
            return state
    }
}

export default reducer;