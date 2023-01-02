import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom'
import "./App.css";

import MainPage from './components/PageComponent/MainPage/MainPage'
//import UpdateMainPage from './components/PageComponent/UpdateMainPage/UpdateMainPage';
import MagazineMainPage from './components/PageComponent/Magazine/MainPage/MagazineMainPage';
import MagazineMenuPage from './components/PageComponent/Magazine/MenuPage/MagazineMenuPage';
import ProfilePage from './components/PageComponent/ProfilePage/ProfilePage'
import HeaderBar from './components/HeaderBar/HeaderBar'


function App() { 
  return (
    <div>
      <Router>
        <div className='App'>
          <div className='App-Page'>
            <Routes>
              <Route path='/' exact element={<MagazineMainPage />} />
              <Route path='/menu' element={<MagazineMenuPage />} />
              <Route path='/profile' element={<ProfilePage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;