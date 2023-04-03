import {propsPerson} from "./Person.types"

export const Person  = (props:propsPerson) =>{
    return(
    <div>
        {props.name.firstName} {props.name.lastName}
    </div>
    )
}