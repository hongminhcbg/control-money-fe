import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router, Route
} from 'react-router-dom';
import MainNavigate from './ui/MainNavagate';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Router>
        <MainNavigate/>
        <div className="App">
          <h1>This is header </h1>
        </div>
      </Router>
  );
}

export default App;
