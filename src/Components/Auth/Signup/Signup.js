import React from 'react'
import { Form, Input, Button } from 'reactstrap'

export default function Signup(props){
    const [username, setUsername] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [cpass, setCPass] = React.useState('')


    function handleSubmit(e) {
        e.preventDefault()
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("Email", email);
        urlencoded.append("UserName", username);
        urlencoded.append("Password", pass);
        urlencoded.append("ConfirmPassword", cpass);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("https://localhost:44304/api/account/register", requestOptions)
            .then(response => response.text())
            .then(result => {console.log(result); props.setSS(!props.SS)})
            .catch(error => console.log('error', error));
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" type="text" />
            <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
            <Input value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Password" type="password" />
            <Input value={cpass} onChange={(e) => setCPass(e.target.value)} placeholder="Confirm Password" type="password" />
            <Button type="submit">Sign Up</Button>
            <Button color="info" className="float-right" onClick={() => props.setSS(!props.SS)}>Sign In</Button>
        </Form>
    )
}