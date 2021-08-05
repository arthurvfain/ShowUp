import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import EventCard from './EventCard'
import FriendCard from './FriendCard'
import Loading from './Loading'
function UserPage({currentUser}){
    
    const params = useParams();
    
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [friend, setFriend] = useState(false)
    const [requested, setRequested] = useState(false)
    const [inverseRequested, setInverseRequested] = useState(false)
    const [friendRequestId, setFriendRequestId] = useState('')
    const [friendList, setFriendList] = useState([])
    
    useEffect(() => {
        fetch(`/users/${params.id}`).then(r=>r.json()).then((data) => {
            setUser(data)
            setLoading(false)
            setFriendList(data.friends)
            console.log(data)
            console.log(currentUser)
            if (data.friends.some(friend => friend.id === currentUser.id)) {
                setFriend(true)
            }
            if (data.friend_requests.some(request => request.requester_id === currentUser.id)) {
                setRequested(true)
            }
            if (currentUser.friend_requests.some(request => request.requester_id === data.id)) {
                setFriendRequestId(currentUser.friend_requests.find(request => request.requester_id === data.id).id)
                setInverseRequested(true)
            }
        })
    }, [])

    function addFriend() {
        console.log('clicked')
        fetch('/friend_requests', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                requester_id: currentUser.id,
                requestee_id: user.id
            })
        })
        .then(resp => resp.json())
        .then(() => setRequested(true))
    }
    console.log(friendRequestId)

    function cancelRequest() {
        console.log(currentUser)
        console.log(user)
        fetch(`/cancel_request/${currentUser.id}/${user.id}`, {
            method: 'DELETE'
        })
        .then(() => setRequested(false))
    }

    function acceptRequest() {
        fetch(`/friendships`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({friend_request_id: friendRequestId, user_id: user.id, friend_id: currentUser.id})
        })
        .then(() => setFriend(true))
    }

    function unfriend() {
        fetch(`/unfriend/${currentUser.id}/${user.id}`, {method: 'DELETE'})
        .then(() => {
            setFriend(false)
            setRequested(false)
            let newFriends = friendList.filter(friend => friend.id !== currentUser.id)
            setFriendList(newFriends)
        })
    }
    
    
    function generateUserPage(user){
        let publicEvents = user.events.filter(event => event.public)
        return (
            <div>
                <h1>{user.username}'s Page</h1>
                {!friend ? requested ? <button onClick={() => cancelRequest()}>Cancel Friend Request</button> : inverseRequested ? <button onClick={() => acceptRequest()}>Accept Friend Request</button>: <button onClick={() => addFriend()}>Add Friend</button> : <button onClick={() => unfriend()}>Unfriend</button>}
                <h1>User Events</h1>
                <ul>
                    {publicEvents.map(event => <EventCard event={event}/>)}
                </ul>
                <h1>User Friends</h1>
                <ul>
                    {friendList.map(friend => <FriendCard friend={friend}/>)}
                </ul>
            </div>
        )
    }

    return (
        <>
            {loading ? <Loading /> : generateUserPage(user)}
        </>
    )
}
export default UserPage;