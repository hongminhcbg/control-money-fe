import { useState } from 'react';
import {useCookies} from 'react-cookie';
function Home(){
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    // if (cookies.token !== ""){
    //     setLoginSuccess(true);
    // }

    if(cookies.username && cookies.username !== "") {
        return (
            <h1> Hello {cookies.username}</h1>
        )
    }

    return(
        <h1>This is Home page</h1>
    )
}

export default Home;