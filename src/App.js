import logo from './logo.svg';
import {
  BrowserRouter as Router, Route
} from 'react-router-dom';
import MainNavigate from './ui/MainNavagate';

import 'bootstrap/dist/css/bootstrap.min.css';
import Avatar from './ui/avatar/Avatar';

function App() {
  return (
      <Router>
        <MainNavigate/>
        <div className="App">
        </div>
      </Router>
  );
}

export default App;
