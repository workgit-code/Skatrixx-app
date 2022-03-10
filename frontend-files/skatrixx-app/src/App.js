import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import NavBar from './components/NavBar';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
        <div>
          <NavBar/>
          <Routes>
            <Route path={'/'} exact element={<Profile/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
