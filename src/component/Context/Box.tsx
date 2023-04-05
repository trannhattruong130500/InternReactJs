import { useContext } from "react"
import { ThemeContext } from "./ThemeContextProvider"

export const Box = () =>{
    const ThemeContextt = useContext(ThemeContext)
    return(
        <div style={{background: ThemeContextt.primary.main, color: ThemeContextt.secondary.text}}>
            Theme Box Provider
        </div>
    )
}