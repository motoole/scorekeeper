import React from 'react';
import { Link } from 'react-router-dom';

// component imports
import ListGames from './ListGames.js';

const ListPage = () => {
  
  let ls = JSON.parse(localStorage.getItem('skGamesData'));

  let hasGames = () => { 
    let data = false;

    if (ls != null) {
      data = true;
    }

    return data;
  }

  if (hasGames()) {
    return(
      <ListGames gamesData={ls.gamesData} />
    )
  } else {
    return(
      <div className="listPage">
        <h2>There are no current games</h2>
        <p>You should <Link to="/createGame">create a game</Link></p>
      </div>
    )
  }
}

export default ListPage;
