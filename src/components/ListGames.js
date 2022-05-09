import React from 'react';
import { Box, Card } from '@mui/material';

const ListGames = (props) => {
  let listData = props.gamesData;

  return(
    <div className='ListGames'>
      <h1>List Games Component</h1>
      
      {
      listData.map((game, index) => 
        <Box key={index} sx={{
          marginBottom: '0px',
          padding: '10px'
        }}>
          <Card sx={{ padding: '20px' }}>
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
