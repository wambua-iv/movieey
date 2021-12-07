import React from 'react';
import Home from './components/pages/Home';
import { useFetchData }  from './customHooks'

function App() {
  const MoviesObj = useFetchData("movies1")
  return (
    <div className="App">
		<Home moviesObj = {MoviesObj} />
    </div>
  );
}

export default App;
