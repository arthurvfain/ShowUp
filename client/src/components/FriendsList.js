import Loading from './Loading'
import FriendCard from './FriendCard'
import {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'

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
    <>
    <h1>Friends</h1>
    {loading ? <Loading /> : friends.length > 0 ? <Container>{friends.map(friend => <FriendCard friend={friend}/>)}</Container> : <li>Go Outside</li>}
    </>
    )
}


<Container>
    
</Container>

export default FriendsList 