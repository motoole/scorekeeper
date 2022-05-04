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

import { Close } from '@mui/icons-material';

const CreateGame = () => {
  const current = new Date();

  const [gameName, setGameName] = useState("");
  // const [players, setPlayers] = useState("");

  const [playerNames, setPlayerNames] = useState([{ player: '' }])

  let handleChange = (i, e) => {
      console.log(playerNames)
      let newPlayerNames = [...playerNames];
      newPlayerNames[i][e.target.player] = e.target.value;
      setPlayerNames(newPlayerNames);
    }
  
  let addFormFields = () => {
      setPlayerNames([...playerNames, { player: "" }])
    }
  
  let removeFormFields = (i) => {
      let newPlayerNames = [...playerNames];
      newPlayerNames.splice(i, 1);
      setPlayerNames(newPlayerNames)
  }
  
  let handleSubmit = (event) => {
      event.preventDefault();
      alert(JSON.stringify(playerNames));
  }

  const handleCreateGame = () =>{
    console.log(gameName);
    console.log(JSON.stringify(playerNames));
  }

  return(
    <div className='createGame'>
      <Container sx={{ marginTop: '90px' }}>
        <Typography variant="h5" component="div">
          New Game
          <IconButton aria-label="cancel" color="primary" component={Link} to="/" sx={{ float: 'right' }}>
            <Close />
          </IconButton>
        </Typography>
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
        
        {/* <Typography component="div" variant="div" sx={{ margin: '20px 0' }}>
          <TextField 
            id="createGamePlayers" 
            label="Players" 
            variant="filled" 
            sx={{ width: '100%'}} 
            value={players} 
            onChange={(e) => {setPlayers(e.target.value)}}
          />
        </Typography> */}
        {playerNames.map((element, index) => (
          <div key={index}>
            <Typography component="div" variant="div" sx={{ margin: '20px 0' }}>
              <TextField 
                label={"Player Name"} 
                variant="filled" 
                sx={{ width: '100%'}} 
                name="player"
                value={ element.playerNames } 
                onChange={(e) => { handleChange(index, e) }}
              />
              {
                index ? 
                  <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> 
                : null
              }
            </Typography>
          </div>
        // <input type="text" name="player" value={element.player || ""} onChange={e => handleChange(index, e)} />
        ))}
        <Typography component="div" variant="div" sx={{ margin: '20px 0' }}>
          <Stack spacing={2} direction="row" justifyContent="space-between">
            <Button variant="outlined" onClick={(e) => addFormFields()}>Add Player</Button>
            <Button variant="contained" onClick={ handleCreateGame }>Create Game</Button>
          </Stack>
        </Typography>
      </Container>

    </div>
   
  );
}

export default CreateGame;
