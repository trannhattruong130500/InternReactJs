import { useRef, useEffect, useState } from "react";


export const MultableRef = () =>{
    const [timer, setTimer]= useState(0);
    const interValRef = useRef<number | null>(null)
    useEffect (()=>{
      interValRef.current= window.setInterval(()=>{
        setTimer((timer)=> timer + 1)
      }, 1000)
      return () =>{
        stopTimer()
      }
    }, [])

    const stopTimer =()=>{
        if (interValRef.current) {
            window.clearInterval(interValRef.current)
        }
    }
   return(
    <div>
        HookTime - {timer} - 
        <button onClick={()=>stopTimer()}>Stop Timer</button>
    </div>
   )
}