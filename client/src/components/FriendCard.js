import {useHistory, Link, Redirect} from 'react-router-dom'
import {useState} from 'react'
import {Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

function FriendCard({friend}){

    // const [clicked, setClicked] = useState(false)

    // let history = useHistory()

    // function handleClick()
    // {
    //     setClicked(true)
    //     // return <Redirect to={`/user_page/${friend.id}`} />
    //     // history.push(`/user_page/${friend.id}`)
    // }


    return (
        <>
        <LinkContainer target='_self' to={`/x_user_page/${friend.id}`}><div className="d-grid gap-2"><Button variant="outline-primary" size="lg" as='h1'>{friend.username}</Button></div></LinkContainer>
        {/* <button onClick={handleClick}>{friend.username}</button> */}
        {/* <Link target='_self' to={`/x_user_page/${friend.id}`}>{friend.username}</Link> */}
        {/* {clicked ? <Redirect to={`/user_page/${friend.id}`} /> : null} */}
        </>
    )
}


export default FriendCard