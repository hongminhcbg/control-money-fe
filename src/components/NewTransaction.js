import { useState } from 'react';
import {FloatingLabel, Form, Button} from 'react-bootstrap';
import {useCookies} from 'react-cookie';

function NewTracsaction(){
    
    const [money, setMoney] = useState(0);
    const [tag, setTag] = useState("");
    const [desc, setDesc] = useState("");
    const [cookies] = useCookies([]);
    async function addTransactionHandler(event){
        event.preventDefault();
        let body = {
            'money': parseInt(money),
            'tag': tag,
            'detail': desc,
        }
        await fetch('http://localhost:8080/api/v1/log', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + cookies.token,
            },
            body: JSON.stringify(body),
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            if(data && data.meta && data.meta.code === 200){
                window.location.href = "/";
            }
        })
    }

    return(
        <div>
            <Form>
                <FloatingLabel
                    controlId="floatingMoney"
                    label="Money"
                    className="mb-3"
                >
                    <Form.Control type="number" placeholder="1000" onChange={(e) => setMoney(e.target.value)} />
                </FloatingLabel>
                <FloatingLabel 
                    controlId="floatingTag" 
                    label="Tag">
                    <Form.Control type="text" placeholder="Eat" onChange={(e) => setTag(e.target.value)}/>
                </FloatingLabel>
                <FloatingLabel 
                    controlId="floatingDesc" 
                    label="Description">
                    <Form.Control type="text" placeholder="Eat luch" onChange={(e) => setDesc(e.target.value)}/>
                </FloatingLabel>
                <Button variant="primary" type="submit" onClick={addTransactionHandler}>
                    Add
                </Button>
            </Form>
        </div>
    )
}

export default NewTracsaction;