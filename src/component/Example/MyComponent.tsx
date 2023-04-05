import React, { useState } from "react"


interface MyComponentProps {
    initalCount: number,
    message: string
}

export const MyComponent = (props: MyComponentProps) => {

    const [count, setCount] = useState<number>(props.initalCount)
    const [message, setMessage] = useState<string>(props.message)

    const handleClick = () => {
        setCount(count + 1);
      };

    return (
        <div>
            <div>
                <p>Count: {count}</p>
                <button onClick={handleClick}>Increment</button>    
                <p>{message}</p>
            </div>
        </div>
    )
}