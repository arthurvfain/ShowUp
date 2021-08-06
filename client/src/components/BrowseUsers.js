import {useEffect, useState} from 'react'
import Loading from './Loading'
import FriendCard from './FriendCard'
import { Grid } from '@material-ui/core'

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
        <div className='pageContent'>
            <h1>People Who ShowUp</h1>
            {loading ? <Loading /> : <Grid container justifyContent='center' spacing={2}>{filteredUsers.map(user => <Grid item xs={6} sm={3} key={user.id}><FriendCard friend={user}/></Grid>)}</Grid>}
        </div>
    )
}
export default BrowseUsers