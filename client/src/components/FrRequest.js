function FrRequest({request, rejectRequest, acceptRequest})
{
    return (
        <li>
            <p>{`${request.requester.username} wants to be your friend !`}</p>
            <button onClick={() => acceptRequest(request.id, request.requestee_id, request.requester_id)}>Accept</button>
            <button onClick={() => rejectRequest(request.id)}>REJECTED</button>
        </li>
    )
}
export default FrRequest;