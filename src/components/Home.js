import { useState } from 'react';
import {useCookies} from 'react-cookie';
import TransactionList from './transaction/TransactionList';
function Home(){
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const [logs, setLogs] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    if(!isLoaded){
        fetch('http://localhost:8080/api/v1/log?begin=2019-01-01&end=2022-01-01', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + cookies.token,
            },
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            setIsLoaded(true);
            if(data && data.meta && data.meta.code === 200){
                setLogs(data.data);
            }
        });
    }
    const DUMMY_DATA = [
        {
            'id': 1,
            'money': 100,
            'detail': 'this is detail',
            'tag': 'ahihihi',
                  
        },
        {
            'id': 2,
            'money': 150,
            'detail': 'this is detail 2',
            'tag': 'lol',
                  
        },
        {
            'id': 3,
            'money': 300,
            'detail': 'this is detail 3',
            'tag': 'HM',
                  
        },
    ]
    if(cookies.username && cookies.username !== "") {
        return (
            <div>
                <h1> Hello {cookies.username}</h1>
                <TransactionList data={logs}/>
            </div>
        )
    }

    return(
        <h1>This is Home page</h1>
    )
}

export default Home;