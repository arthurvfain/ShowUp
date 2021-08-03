import UserEvents from "./UsersEvents";
import PendingInvitations from './PendingInvitations'

function UserDashboard({currentUser}){
    return (
        <>
            <UserEvents currentUser={currentUser}/>
            <PendingInvitations currentUser={currentUser}/>
        </>
    )

}
export default UserDashboard