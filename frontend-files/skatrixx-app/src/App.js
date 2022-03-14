import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import NavBar from './components/NavBar';
import Profile from './components/Profile';
import SkatePage from './components/SkatePage';
import TrophyPage from './components/TrophyPage';

function App() {
  return (
    <Router>
        <div>
          <Routes>
            <Route path={'/'} exact element={<Profile/>}/>
            <Route path={'/skate'} element={<SkatePage/>}/>
            <Route path={'/trophy'} element={<TrophyPage/>}/>
          </Routes>
          <NavBar/>
      </div>
    </Router>
  );
}

export default App;
