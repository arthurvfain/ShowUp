import {NavLink, useHistory} from 'react-router-dom'


function NavBar({currentUser, setCurrentUser}) {

    let history = useHistory()
    async function handleLogout() {
        let resp = await fetch('/sessions', {
            method: 'DELETE'
        })

        if(resp.ok) {
            setCurrentUser('')
            history.push('/')
        }
        //DO WE WANT/NEED SOMETHING TO HANDLE FAILURE?
    }

    return (
        <>
            <h1>ShowUp {currentUser ? `, ${currentUser.username}`: null}</h1>
            {currentUser ? <> <NavLink to='/home'>Home</NavLink><button onClick={handleLogout}>Log Out</button> </> : <><NavLink to='/signup'>Sign Up</NavLink>
            <NavLink to='/login'>Log In</NavLink></>}
        </>
    )
}
export default NavBar