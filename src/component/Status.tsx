type StatusProps = {
    status : 'loading' | 'error' | 'succes'
}

export const Status = (props:StatusProps) =>{
    let message
    if (props.status === 'loading') {
        message = 'Loading...'
    }else if (props.status === 'error') {
        message = 'Data Error...'
    }else if (props.status === 'succes') {
        message = 'Data fetch succesing...'
    }
    return(
        <div>
            <h2>Loading...</h2>
            <h2>Data fetch succesing...</h2>
            <h2>Data Error...</h2>
        </div>
    )
}