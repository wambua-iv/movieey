import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import {MovieObject} from './datatypes'
import SideBar from './components/layout/SideBar';
import Home from './components/pages/Home';
import MovieDescription from './components/pages/MovieDescription';
import { GlobalStyles } from './components/styles/Global.styles';
import { useFetchData }  from './customHooks';


function App() {
  const MoviesObj = useFetchData("movies1");
  return (
    <div className="App">
    
    {/* <SideBar /> */}
    <Router>
      <Routes>
        <Route path ='/' element ={<Home moviesObj={MoviesObj} />} />
        <Route path ='/movie/:id' element={<MovieDescription movie = {MoviesObj.data} />} />
      </Routes>
    </Router>
    <GlobalStyles />
    </div>
  );
}

export default App;
