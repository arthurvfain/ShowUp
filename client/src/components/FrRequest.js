function FrRequest({request})
{
    return (
        <li>
            <p>{`${request.requester.username} wants to be your friend !`}</p>
            <button>Accept</button>
            <button>REJECTED</button>
        </li>
    )
}
export default FrRequest;