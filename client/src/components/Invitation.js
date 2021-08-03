function Invitation({invitation})
{
    return (
        <li>
            <p>{`${invitation.inviter.username} invited YOU to ${invitation.event.name}`}</p>
            <button>Accept</button>
            <button>REJECTED</button>
        </li>
    )
}
export default Invitation;