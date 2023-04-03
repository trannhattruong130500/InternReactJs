import React from "react"

type ButtonProps = {
    handleButton : (event : React.MouseEvent<HTMLButtonElement>, id: number) =>void
}

export const Button = (props:ButtonProps) =>{
    return(
        <div>
            <button onClick={(event)=> props.handleButton(event, 1)}>CLick</button>
        </div>
    )
}