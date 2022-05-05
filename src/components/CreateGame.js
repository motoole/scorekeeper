import React, { useState, useRef, useEffect } from 'react';
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

import { 
  Close as CloseIcon, 
  RemoveCircle as RCIcon
} from '@mui/icons-material';

const CreateGame = () => {
  const [gameName, setGameName] = useState('');
  const [playerNames, setPlayerNames] = useState([{ player: ''}])

  let handleChange = (i, e) => {
    let newPlayerNames = [...playerNames];
    newPlayerNames[i][e.target.name] = e.target.value;
    setPlayerNames(newPlayerNames);
  }
  
  let addFormFields = () => {
    let focusId = "playerName" + [...playerNames].length;
    setPlayerNames([...playerNames, { player: ''}]);

    // FIX: This isn't right, but works for now
    setTimeout(() => {
      document.getElementById(focusId).focus();
    }, 0);
  }
  
  let removeFormFields = (i) => {
    let newPlayerNames = [...playerNames];
    newPlayerNames.splice(i, 1);
    setPlayerNames(newPlayerNames)
  }

  let formatPlayers = () => {
    let playerArr = [];

    playerNames.forEach(name => {
      playerArr.push({ "pName" : name.player, "pScore" : 0 });
    });

    return playerArr;
  }

  let validateInputs = () => {
    let validForm = false;

    if(gameName.length !== 0 && playerNames[playerNames.length -1].player.length !== 0) {
      validForm = true;
    }

    return validForm;
  };

  const handleCreateGame = () => {
    // default localStorage object: {"gamesData":[]}

    // validate inputs first
    // should probably apply to the button to prevent getting here in the first place
    if(!validateInputs()) {
      return false;
    }

    // FIX: need to add check for localStorage of skGamesData and set up default if it's missing
    let ls = JSON.parse(localStorage.getItem('skGamesData'));
    let date = new Date();

    let createGameData = {
      "gameId" : ls.gamesData.length,
      "gameType" : {
        "name" : gameName,
        "type" : "gameType"
      },
      "startDate" : date.toISOString(),
      "endDate" : "",
      "scores" : formatPlayers(),
      "numRounds" : 0
    };

    ls.gamesData = [...ls.gamesData, createGameData];
    console.log(ls.gamesData);
    // localStorage.setItem('skGamesData', JSON.stringify(ls));
  }

  return(
    <div className='createGame'>
      <Container sx={{ marginTop: '90px' }}>
        <Typography variant="h5" component="div">
          New Game
          <IconButton aria-label="cancel" color="primary" component={Link} to="/" sx={{ float: 'right' }}>
            <CloseIcon />
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

        {playerNames.map((element, index) => (
          <div key={index}>
            <Typography component="div" variant="div" sx={{ margin: '20px 0' }}>
              <TextField 
                id={'playerName' + index} 
                label={"Player Name"} 
                variant="filled" 
                sx={{ width: '100%'}} 
                name="player"
                value={ element.playerNames } 
                onChange={(e) => { handleChange(index, e) }}
              />
              {
                index ? 
                  <IconButton aria-label="cancel" color="primary" onClick={() => removeFormFields(index)} sx={{ 
                    float: 'right', 
                    top: '-45px'
                  }}>
                    <RCIcon />
                  </IconButton>
                : null
              }
            </Typography>
          </div>

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
