import { useState } from 'react';
import {useCookies} from 'react-cookie';
import "../../css/main.css";
import facebook  from '../../images/facebook.svg';
import google from '../../images/google.svg';
import profile from '../../images/profile.svg';

function Login(){
    const [email, setEmail] = useState("Enter username");
    const [password, setPassword] = useState("Enter password");
    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    async function loginHandler(event){
        event.preventDefault();
        let body = {
            'username': email,
            'password': password,
        };
        console.log(body);
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
            <div className="wrapper">
                <div className="hero">
                    <div className="profile-icon">
                        <img src={profile} alt="sss"/>
                    </div>
                    <div className="form-username-password">
                        <form onSubmit={loginHandler}>
                            <div className="form-username">
                                <label for="username">Username</label>
                                <input type="text" id="username" name="username" value={email} onChange={e => setEmail(e.target.value)}/> 
                            </div>

                            <div className="form-password">
                                <label for="password">Password</label>
                                <input type="password" id="password" name="password" value={password} placeholder={password} onChange={e => setPassword(e.target.value)}/>    
                                <p>Your password is between 4 and 12 characters</p>
                            </div>
                            <input type="submit" value="Register" id="submit"/>
                        </form>
                    </div>
                    <div className="login-social">
                        <img src={google} alt="login google" id="google"/>
                        <img src={facebook} alt="login facebook" id="facebook"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;