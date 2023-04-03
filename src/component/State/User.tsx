import { useState } from "react"

type AuthUser = {
    name: string,
    email: string
}

export const User = () =>{
    const [user, setUser] = useState<AuthUser>({} as AuthUser);

    const handleOnLogin = () =>{
        setUser({
            name: 'truong',
            email: 'truongtran@gmail.com'
        })
    }
 
    return(
        <div>
            <button onClick={handleOnLogin}>Login</button>
            <div>User is name {user.name}</div>
            <div>User is email {user.email}</div>
        </div>
    )
}