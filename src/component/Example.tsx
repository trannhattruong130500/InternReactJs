type ExampleProps ={
    name : string,
    old ? : number,
    isLoggedIn : boolean
}


export const Example = (props: ExampleProps) =>{
    return(
    <div>
        {
        props.isLoggedIn ?  <div>Hello my Name is ...{props.name} and i {props.old} year old</div> 
        : 
        <div>Welcome Hello word</div> 
        }
    </div>
    )
}