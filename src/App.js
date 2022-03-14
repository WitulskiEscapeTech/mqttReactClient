import React, { useEffect } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

import HomePage from "./HomePage"

function App() {

  return (
    <div className="bg-amber-500 h-screen">

      <Routes>

        <Route path="/" element={
          <HomePage/>
        }/>      

      </Routes>
    </div>
  );
}

export default App;
