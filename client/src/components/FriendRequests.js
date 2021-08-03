import Loading from './Loading'
import FrRequest from './FrRequest'
import {useState, useEffect} from 'react'

function FriendRequests({currentUser}) {
    
    const [loading, setLoading] = useState(true)
    const [friendRequests, setFriendRequests] = useState([])
    
    useEffect(() => {
        fetch(`/friend_requests/${currentUser.id}`).then(r=>r.json()).then(data=>{
            setFriendRequests(data)
            setLoading(false)
        })
        
    }, [])

    return (
    <>
    <h1>Friend Requests</h1>
    {loading ? <Loading /> : friendRequests.length > 0 ? friendRequests.map(request => <FrRequest request={request}/>) : <li>Take a shower</li>}
    </>
    )
}
export default FriendRequests