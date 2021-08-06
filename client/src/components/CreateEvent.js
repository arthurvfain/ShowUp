import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

function CreateEvent({currentUser}) {
    const [formData, setFormData] = useState({name: '', location: '', public: false})
    const [errors, setErrors] = useState([])

    let history = useHistory()

    function handleChange(e) {
        let newData = {}
        if(e.target.name == 'public'){
            let publicity = formData.public
            publicity = !publicity
            newData = {
                ...formData,
                public: publicity
            }
        }
        else {
            let prop = e.target.name
            let val = e.target.value

            newData = {
                ...formData,
                [prop]: val
            }
        }
        setFormData(newData)
    }

    async function handleSubmit(e) {
        e.preventDefault()

        let newEvent = {
            name: formData.name,
            location: formData.location,
            public: formData.public,
            time: (formData.date +' '+ formData.time),
            creator: currentUser.id
        }

        let resp = await fetch('/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newEvent)
        })

        if (resp.ok) {
            setErrors([])
            resp.json().then(history.push('/home'))
        } else {
            resp.json().then(data => setErrors(data.errors))
        }
    }

    return(
        <div >
            <Form onSubmit={handleSubmit} style={{maxWidth: '18rem', margin: 'auto', paddingTop: '50px'}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Event Name</Form.Label>
                    <Form.Control type="text" placeholder="Event Name" onChange={handleChange} name='name' value={formData.name}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" placeholder="Location" onChange={handleChange} name='location' value={formData.location}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date"  onChange={handleChange} name='date' value={formData.date}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Time</Form.Label>
                    <Form.Control type="time"  onChange={handleChange} name='time' value={formData.time}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{ marginLeft: '35%'}}>
                    <Form.Check type="checkbox" label="Public?" onChange={handleChange} name='public' value={formData.public}/>
                </Form.Group>
                <Button variant="primary" type="submit" style={{ marginLeft: '35%'}}>
                    Submit
                </Button>
            </Form>
            {/* <form onSubmit={handleSubmit}>
                <label>Event Name: <input onChange={handleChange} type='text' name='name' value={formData.name}></input></label>
                <label>Location: <input onChange={handleChange} type='text' name='location' value={formData.location}></input></label>

                <label>Date: <input onChange={handleChange} type='date' name='date' value={formData.date}></input></label>
                <label>Time: <input onChange={handleChange} type='time' name='time' value={formData.time}></input></label>
                <label>Public?: <input onChange={handleChange} type='checkbox' name='public' value={formData.public}></input></label>
                <input type='submit'></input>
            </form> */}

            {errors ? errors.map(error => <li>{error}</li>) : null}
        </div>
    )
}

export default CreateEvent