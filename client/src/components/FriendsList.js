import Loading from './Loading'
import FriendCard from './FriendCard'
import {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid';

function FriendsList({currentUser}) {
    
    const [loading, setLoading] = useState(true)
    const [friends, setFriends] = useState([])
    
    useEffect(() => {
        fetch(`/friendships/${currentUser.id}`).then(r=>r.json()).then(data=>{
            setFriends(data)
            setLoading(false)
        })
        
    }, [])

    return (
    <div className = 'pageContent'>
    <h1>Friends</h1>
    {loading ? <Loading /> : friends.length > 0 ? <Grid container justifyContent='center' spacing={2}>{friends.map(friend => <Grid item xs={6} sm={3} key={friend.id}><FriendCard friend={friend}/></Grid>)}</Grid> : <li>Go Outside</li>}
    </div>
    )
}


export default FriendsList 