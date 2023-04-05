
import { useDispatch } from "react-redux"
import {bindActionCreators} from "redux"
import { actionCreatos, State } from "../../store"
import { useSelector } from "react-redux"

export const ExampleRedux = () =>{
    const dispatch = useDispatch();
    const {depositMoney, withdrawMoney, bankrupt} = bindActionCreators(actionCreatos, dispatch)
    const amount = useSelector((state: State)=> state.bank)

    return(
        <div style={{textAlign: "center" ,paddingBottom: "10px"}}>
            <h1>{amount}</h1>
            <button onClick={()=>depositMoney(1000)}>Deposit</button>
            <button onClick={()=>withdrawMoney(500)}>WithDraw</button>
            <button onClick={()=>bankrupt()}>BankKupt</button>
        </div>
    )
}


