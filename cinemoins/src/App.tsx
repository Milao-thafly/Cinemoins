import { StrictMode, useState } from 'react'
import { useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Homepage } from "../views/Homepage"
import "./App.css"

function App() {
  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     try {
  //     const response = await fetch("https://api.chucknorris.io/jokes/random")
  //     const data = await response.json();
  //     setJoke(data.value);
  //     setIsLoading(false);
  //     } catch (error) {
  //       setIsLoading(false);
  //       setIsError(true)
  //       console.log(error);
  //     }
      
    
  //   getData(); 
  // }, []);
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
