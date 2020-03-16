import React from 'react'
import { Form, Input, Button } from 'reactstrap'

export default function Login(props) {
    const [username, setUsername] = React.useState('')
    const [pass, setPass] = React.useState('')

    function handleSubmit(e) {
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("UserName", username);
        urlencoded.append("Password", pass);
        urlencoded.append("grant_type", "password");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("https://localhost:44304/token", requestOptions)
            .then(response => response.json())
            .then(result => props.updateToken(result.access_token))
            .catch(error => console.log('error', error));
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" type="text" />
            <Input value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Password" type="password" />
            <Button type="submit">Submit</Button>
            <Button color="info" className="float-right" onClick={() => props.setSS(!props.SS)}>Need an account?</Button>
        </Form>
    )
}