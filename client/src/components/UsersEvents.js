import Loading from './Loading'
import EventCard from './EventCard'
import { Grid } from '@material-ui/core'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function UserEvents({events, loading}) {
    

    return (
    <>
    <h1>My Events</h1>
    {loading ? <Loading /> : events.length > 0 ? <Grid container justifyContent='center' spacing={2}>{events.map(event => <Grid item xs={6} sm={3} key={event.id}><EventCard event={event}/></Grid>)}</Grid> : <LinkContainer to='/create_event'><Button>Host Your Own Event !</Button></LinkContainer>}
    </>
    )
}
export default UserEvents