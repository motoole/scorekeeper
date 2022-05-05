import React from 'react';
import { Link } from 'react-router-dom';

// component imports
import ListGames from './ListGames.js';

const ListPage = () => {
  let hasGames = () => { 
    let data = false;
    let ls = JSON.parse(localStorage.getItem('skGamesData'));
    if (ls.gamesData) {
      data = true;
    }
    return data;
  }

  if (hasGames()) {
    return(
      <ListGames />
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
