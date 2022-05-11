import React from 'react';
import { Box, Card } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const ListGames = (props) => {
  let listData = props.gamesData;
  const navigate = useNavigate();

  return(
    <div className='ListGames'>
      <h1>Active Games</h1>
      {
      listData.map((game, index) => 
        <Box 
          component={ Link }
          to="/singleGame"
          key={index} 
          sx={{
            marginBottom: '0px',
            padding: '10px'
          }}>
          <Card variatn="oulined" sx={{ 
            padding: '20px',
            border: 1, 
            borderColor: '#666'
          }}>
            <div>Game Name: {game.gameType.name}</div>
            <div>Round: {game.numRounds}</div>
            {
            game.scores.map((player, index) =>
              <div key={index}>{player.pName}</div>
            )
            }
          </Card>
        </Box>
      )}
    </div>
  );
}

export default ListGames;
