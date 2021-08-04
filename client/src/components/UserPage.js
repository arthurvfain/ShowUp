import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import EventCard from './EventCard'
import FriendCard from './FriendCard'
import Loading from './Loading'
function UserPage({currentUser}){
    
    const params = useParams();
    
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        fetch(`/users/${params.id}`).then(r=>r.json()).then((data) => {
            setUser(data)
            setLoading(false)
        })
    }, [])
    
    if (!loading) {
        console.log(user.events.map(event => event))
    }
    
    function generateUserPage(user){
        let publicEvents = user.events.filter(event => event.public)
        console.log(publicEvents)
        return (
            <div>
                <h1>{user.username}'s Page</h1>
                <h1>User Events</h1>
                <ul>
                    {publicEvents.map(event => <EventCard event={event}/>)}
                </ul>
                <h1>User Friends</h1>
                <ul>
                    {user.friends.map(friend => <FriendCard friend={friend}/>)}
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