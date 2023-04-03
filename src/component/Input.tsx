type InputProps = {
    value: string,
    handleInput : (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props:InputProps) =>{
    const handleOnchangeInput = (event: React.ChangeEvent<HTMLInputElement>) =>{
        console.log(`event onchange`, event)
    }

    return(
        <div>
           <input type="text" value="" onChange={handleOnchangeInput} ></input>
        </div>
    )
}