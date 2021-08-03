import {useState} from 'react'

function SignUp ({setCurrentUser}) {
    const [formData, setFormData] = useState({username: '', password: '', address: ''})
    const [errors, setErrors] = useState([])

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
        let resp = await fetch('/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if (resp.ok) {
            setErrors([])
            resp.json().then(console.log) // TO DO: ADD REDIRECT
        } else {
            resp.json().then(data => setErrors(data.errors))
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Username: <input onChange={handleChange} type='text' name='username' value={formData.username}></input></label>
                <label>Email: <input onChange={handleChange} type='text' name='address' value={formData.address}></input></label>
                <label>Password: <input onChange={handleChange} type='password' name='password' value={formData.password}></input></label>
                <input type='submit'></input>
            </form>
            {errors ? errors.map(error => <li>{error}</li>) : null}
        </>
    )
}

export default SignUp