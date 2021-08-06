import Loading from './Loading'
import FriendCard from './FriendCard'
import {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import {LinkContainer} from 'react-router-bootstrap'
import {Button} from 'react-bootstrap'

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
    {loading ? <Loading /> : friends.length > 0 ? <Grid container justifyContent='center' spacing={2}>{friends.map(friend => <Grid item xs={6} sm={3} key={friend.id}><FriendCard friend={friend}/></Grid>)}</Grid> : <LinkContainer to='/user_list'><Button>Get Out There !</Button></LinkContainer>}
    </div>
    )
}


export default FriendsList 