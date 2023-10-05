// App.js

import React from 'react';
import Movie from './Components/Movie'; // Movie 컴포넌트 import
import { movies } from './movieDummy'; // movieDummy.js에서 데이터 가져오기

function App() {
  return (
      <div className="app-container">
        {
      movies.results.map((item)=> {
        return (
          <Movie
          title={item.title}
          poster_path={item.poster_path}
          vote_average={item.vote_average}
          />
        )
      }) 
      }
      </div>
  );
}

export default App;
 