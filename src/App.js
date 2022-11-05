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
import ProfilePage from './components/PageComponent/ProfilePage/ProfilePage'
import HeaderBar from './components/HeaderBar/HeaderBar'


function App() { 
  return (
    <div>
      <Router>
        <div className='App'>
          <div className='App-Header'>
            <HeaderBar />
          </div>
          <div className='App-Page'>
            <Routes>
              <Route path='/' exact element={<MainPage />} />
              <Route path='/profile' element={<ProfilePage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;