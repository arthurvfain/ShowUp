import {useEffect} from 'react'

function BrowseUsers(){
    
    useEffect(() => {
        fetch('/users').then(r=>r.json()).then(console.log)
    }, [])

    return (
        <>
            <h1>Users like You</h1>
        </>
    )
}
export default BrowseUsers