import {useState} from 'react'
import {useHistory} from 'react-router-dom'

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
        <>
            <form onSubmit={handleSubmit}>
                <label>Event Name: <input onChange={handleChange} type='text' name='name' value={formData.name}></input></label>
                <label>Location: <input onChange={handleChange} type='text' name='location' value={formData.location}></input></label>

                <label>Date: <input onChange={handleChange} type='date' name='date' value={formData.date}></input></label>
                <label>Time: <input onChange={handleChange} type='time' name='time' value={formData.time}></input></label>
                <label>Public?: <input onChange={handleChange} type='checkbox' name='public' value={formData.public}></input></label>
                <input type='submit'></input>
            </form>
            {errors ? errors.map(error => <li>{error}</li>) : null}
        </>
    )
}

export default CreateEvent