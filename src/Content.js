import * as React from 'react';
import './App.css';

// data source
// * need to revisit key names.. they're just the worst
import data from './data/gameData.json';

//mui components
import { 
  Typography, 
  Box, 
  Card,
  CardActions,
  CardContent,
  Button,
  IconButton
} from '@mui/material';

// mui icons
import {
  MoreVert,
  People
} from '@mui/icons-material';

import { unoLogo } from './img/unoLogo.jpg';

const Content = () => {

  const gamesData = data['gamesData'];

  console.log(gamesData);

  const handleCardClick = (e) => {
    console.log(e)
  }

  const formatDate = (date) => {
    let format = date.split('T')[0].split('-');
    return format[1] + '/' + format[2] + '/' + format[0];;
  }

   return (
    <div className="Content">
      <Box>
        {
          gamesData.map(game =>
          <Card key={game.gameId} 
            onClick={ event => handleCardClick(game) }
            sx={{ 
              minWidth: 275, 
              marginBottom: 3
            }}>
            <CardContent>
              <Typography variant="h5" component="div">
              Test - {game.gameType['name']}
                <Typography variant="div" component="div" sx={{
                  float: 'right',
                  fontSize: 15
                }}>
                  {
                    formatDate(game.startDate)
                  }
                </Typography>
              </Typography>
              <Typography variant="p" component="div" sx={{
                marginTop: '20px'
              }}>
                <People sx={{
                  position: 'relative',
                  top: '5px',
                  marginRight: '25px'
                }}/>
                  <span>                 
                    {
                      game.scores.map((players, index) =>
                          <Typography variant="span" key={index} sx={{
                            margin: '0 5px'
                          }}>
                            {players.pName}
                          </Typography>
                      )
                    }
                  </span>
                <IconButton 
                  sx= {{
                    float: 'right'
                  }}
                  aria-label="More Options" 
                  disabled 
                  color="primary">
                  <MoreVert />
                </IconButton>
              </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
          </Card>
          )
        }
      </Box>
    </div>
  );
}

export default Content;
