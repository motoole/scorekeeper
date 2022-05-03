import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// material ui imports
import { 
  Container, 
  Typography, 
  TextField, 
  Divider,
  Stack,
  Button,
  IconButton 
} from '@mui/material';

const CreateGame = () => {
  const current = new Date();

  const [gameName, setGameName] = useState("");
  const [players, setPlayers] = useState("");

  const handleCreateGame = () =>{
    console.log(gameName);
    console.log(players.split(','))
  }

  return(
    <div className='createGame'>
      <Container sx={{ marginTop: '90px' }}>
        <Typography variant="h5" component="div">New Game</Typography>
        <Divider sx={{ margin: '20px 0' }} />

        <Typography component="div" variant="div" sx={{ margin: '20px 0' }}>
          <TextField 
            id="createGameName" 
            value={gameName} 
            onChange={(e) => {setGameName(e.target.value)}}
            label="Game Name" 
            variant="filled" 
            sx={{ width: '100%'}} 
          />
        </Typography>
        
        <Typography component="div" variant="div" sx={{ margin: '20px 0' }}>
          <TextField 
            id="createGamePlayers" 
            label="Players" 
            variant="filled" 
            sx={{ width: '100%'}} 
            value={players} 
            onChange={(e) => {setPlayers(e.target.value)}}
          />
        </Typography>

        <Typography component="div" variant="div" sx={{ margin: '20px 0' }}>
          <Stack spacing={2} direction="row" justifyContent="space-between">
            <Button variant="outlined" component={Link} to="/">Cancel</Button>
            <Button variant="contained" onClick={ handleCreateGame }>Create Game</Button>
          </Stack>
        </Typography>
      </Container>

    </div>
   
  );
}

export default CreateGame;
