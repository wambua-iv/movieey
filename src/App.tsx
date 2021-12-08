import React from 'react';
import SideBar from './components/layout/SideBar';
import Home from './components/pages/Home';
import { GlobalStyles } from './components/styles/Global.styles';
import { useFetchData }  from './customHooks'

function App() {
  const MoviesObj = useFetchData("movies1")
  return (
    <div className="App">
    
    <SideBar />
		<Home moviesObj = {MoviesObj} />
    <GlobalStyles />
    </div>
  );
}

export default App;
