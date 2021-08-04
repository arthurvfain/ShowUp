function Invitation({acceptInvite, invitation, rejectInvite})
{
    return (
        <li>
            <p>{`${invitation.inviter.username} invited YOU to ${invitation.event.name}`}</p>
            <button onClick={() => acceptInvite(invitation.id, invitation.invitee_id, invitation.event_id)}>Accept</button>
            <button onClick={() => rejectInvite(invitation.id)}>REJECTED</button>
        </li>
    )
}
export default Invitation;