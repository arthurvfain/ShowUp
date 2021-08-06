import { Card, Button } from 'react-bootstrap'

function Invitation({acceptInvite, invitation, rejectInvite})
{
    return (
        <Card className = 'text-center' style={{ maxWidth: '18rem'  }}>
            <Card.Header as="h5">{invitation.event.name}</Card.Header>
            <Card.Body>
                <Card.Title>{`${invitation.inviter.username} invited you !`}</Card.Title>
                <Card.Text>Would you like to: </Card.Text>
                <Button variant="outline-primary" onClick={() => acceptInvite(invitation.id, invitation.invitee_id, invitation.event_id)}>ShowUp</Button>
                <Button variant="outline-danger" onClick={() => rejectInvite(invitation.id)}>Flake</Button>
            </Card.Body>
        </Card>
    )
}
export default Invitation;