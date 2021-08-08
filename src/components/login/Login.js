import { useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import {useCookies} from 'react-cookie';

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    async function loginHandler(event){
        event.preventDefault();
        let body = {
            'username': email,
            'password': password,
        };
        //console.log('body login', JSON.stringify(body));
        await fetch('http://localhost:8080/api/v1/account/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key': 'hongminh229297',
            },
            body: JSON.stringify(body),
        })
        .then((resp) => resp.json())
        .then(data =>{
            console.log(data);
            if(data && data.meta && data.meta.code === 200){
                setCookie('token', data.data.token);
                setCookie('username', data.data.username);
                window.location.href = '/';
            }
        })
    }

    return(
        <div>
            <h1> This is login page </h1>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => {setEmail(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={loginHandler}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Login;