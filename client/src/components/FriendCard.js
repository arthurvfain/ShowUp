import {useHistory} from 'react-router-dom'

function FriendCard({friend}){

    let history = useHistory()

    function handleClick()
    {
        history.push(`/user_page/${friend.id}`)
    }

    return (
        <button onClick={handleClick}>{friend.username}</button>  
    )
}
export default FriendCard