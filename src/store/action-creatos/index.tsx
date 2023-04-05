import { Dispatch } from "redux"
import { actionTypes } from "../action-types"
import { Action } from "../actions"


export const depositMoney = (amount : number) =>{
    return(dispatch: Dispatch<Action>)=>{
        dispatch({
            type: actionTypes.DEPOSIT,
            payload: amount
        })
    }
}

export const withdrawMoney = (amount : number) =>{
    return(dispatch: Dispatch<Action>)=>{
        dispatch({
            type: actionTypes.WITHDRAW,
            payload: amount
        })
    }
}

export const bankrupt = () =>{
    return(dispatch: Dispatch<Action>)=>{
        dispatch({
            type: actionTypes.BANKRUPT,
        })
    }
}

