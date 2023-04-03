import { Name } from "./Person.types"

type propsListPerson = {
    name:Name[]
}

export const PersonList = (props:propsListPerson) =>{
    return(
    <div>
      {props.name.map((item,index) =>{
        return(
            <div key={index + 1}>
                <div>{item.firstName} {item.lastName}</div>
            </div>
        )
      })}
    </div>
    )
}