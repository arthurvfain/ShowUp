import {useEffect, useState} from 'react'
import Loading from './Loading'

function BrowseUsers({currentUser}){

    const [userList, setUserList] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        fetch('/users').then(r=>r.json()).then((data) => {
            setUserList(data)
            setLoading(false)
        })
    }, [])

    const filteredUsers = userList.filter(user => user.id !== currentUser.id)

    return (
        <>
            <h1>Users like You</h1>
            {loading ? <Loading /> : filteredUsers.map(user => <li key={user.id}>{user.username}</li>)}
        </>
    )
}
export default BrowseUsers