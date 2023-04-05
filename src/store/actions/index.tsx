import {actionTypes} from "../action-types/index"

interface DepostiAction {
    type: actionTypes.DEPOSIT,
    payload: number,
}

interface WithDrawAction {
    type: actionTypes.WITHDRAW,
    payload: number,
}

interface BankRuptAction {
   type: actionTypes.BANKRUPT
}

export type Action = DepostiAction | WithDrawAction | BankRuptAction