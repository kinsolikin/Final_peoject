// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import './style.css';
import Home from "./page/Home";
import About from './page/About';
import Daftar from './page/Daftar';
import Dash from './page/Dashboard';
import Expp from './page/Expp';
import PageView from './page/PageView';
import Pagenot from './page/Pagenot';
import Login from './page/Login';
import Account from './page/Account';
import Code from './page/Code';
import Jobdesc from './page/Jobdesc';
import PostJob from './page/PostJob';
import Chating from './page/Chating';
import Profilemy from './page/Profilemy';
import EditProfile from "./page/EditProfile";
import Upload from "./page/Upload";
import Job from "./page/Job";
import Profile from "./page/Profile";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/about' element={<About />} />
          <Route path='/daftar' element={<Daftar />} />
          <Route path='/dashboard' element={<Dash />} />
          <Route path='/explore' element={<Expp />} />
          <Route path='/view' element={<PageView />} />
          <Route path='/notifikasi' element={<Pagenot />} />
          <Route path='/login' element={<Login />} />
          <Route path='/account' element={<Account />} />
          <Route path='/code' element={<Code />} />
          <Route path='/jobdesc' element={<Jobdesc />} />
          <Route path='/postjob' element={<PostJob />} />
          <Route path='/chating' element={<Chating />} />
          <Route path='/pagenot' element={<Pagenot />} />
          <Route path='/profilemy' element={<Profilemy />} />
          <Route path='/Editprofile' element={<EditProfile />} />
          <Route path='/Upload' element={<Upload />} />
          <Route path='/Job' element={<Job />} />
          <Route path='/Profile' element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
