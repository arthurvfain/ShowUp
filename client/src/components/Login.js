import {useState} from 'react'
import {useHistory} from 'react-router-dom'

function Login({setCurrentUser}) {
    const [formData, setFormData] = useState({username: '', password: ''})
    const [error, setError] = useState('')

    let history = useHistory()

    function handleChange(e) {
        let prop = e.target.name
        let val = e.target.value

        let newData = {
            ...formData,
            [prop]: val
        }
        setFormData(newData)
    }
    async function handleSubmit(e) {
        e.preventDefault()
        let resp = await fetch('/sessions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if (resp.ok) {
            setError([])
            resp.json().then(data => {
                setCurrentUser(data)
                history.push('/home')
            }) // TO DO: ADD REDIRECT
        } else {
            resp.json().then(data => {
                console.log(data)
                setError(data.error)})
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Username: <input onChange={handleChange} type='text' name='username' value={formData.username}></input></label>
                <label>Password: <input onChange={handleChange} type='password' name='password' value={formData.password}></input></label>
                <input type='submit'></input>
            </form>
            {error ? <li>{error}</li> : null}
        </>
    )
}

export default Login