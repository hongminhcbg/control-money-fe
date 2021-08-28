import {
    Switch,
    Route
} from 'react-router-dom';
import Home from '../components/Home';
import History from '../components/History';
import Login from '../components/login/Login';
import NewTransaction from '../components/NewTransaction';
import {Navbar, Container, Nav} from 'react-bootstrap';
import classes from './MainNavigate.module.css';

function MainNavigate(){
    return(
        <div>
            <Nav defaultActiveKey="/home" as="ul" className={classes.text}>
            <Nav.Item as="li">
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="/history">History</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="/new-transaction">New Transaction</Nav.Link>
            </Nav.Item>
            </Nav>
            <Switch>
                <Route path="/" exact={true}>
                    <Home/>
                </Route>
                <Route path="/history">
                    <History/>
                </Route>
                <Route path="/new-transaction">
                    <NewTransaction/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
            </Switch>
        </div>
    )
}

export default MainNavigate;