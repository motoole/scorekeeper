import * as React from 'react';
import './App.css';

import gameData from './data/gameData.json';

import { 
  Typography, 
  Box 
} from '@mui/material';


const Content = () => {

  const data = gameData[0]['gamesData'];

   return (
    <div className="Content">
      <Box>
        <Typography variant='h3'>
          Content
        </Typography>
      </Box>
    </div>
  );
}

export default Content;
