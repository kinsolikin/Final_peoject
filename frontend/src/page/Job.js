import React from "react";
import { Routes, Route } from 'react-router-dom';
import Footer from "../components/Footer";
import Joblist from "../components/Joblist";
import Jobdesc from "../components/JobDesc";
import Navpofil from "../components/Navpofil";

function Job() {
    return (
        <div className="App">
         <Navpofil />
         <Routes>
                <Route path="/" element={<Joblist />} />
                <Route path="/jobdesc" element={<Jobdesc />} />
            </Routes>
         <Footer />
        </div>
      );
}

export default Job;