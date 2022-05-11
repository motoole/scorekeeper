import * as React from 'react';
import { Link } from 'react-router-dom';

// mui components
import { 
  Paper,
  BottomNavigation,
  BottomNavigationAction, 
  Toolbar,
  IconButton
} from '@mui/material';

// mui icons
import {
  List as ListIcon,
  Settings as SettingsIcon,
  People as PlayerIcon, 
  AddCircle as AddIcon
} from '@mui/icons-material';

const Footer = () => {
  const [value, setValue] = React.useState(0);
  
  return (
    <div className="Footer">
      <Toolbar />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction component={Link} to="/" label="List" icon={<ListIcon />} />
          <BottomNavigationAction component={Link} to="/createGame" label="" icon={<AddIcon />} 
            sx={{
              position: 'relative',
              top: '-20px'
            }}
          />
          <BottomNavigationAction component={Link} to="/players" label="People" icon={<PlayerIcon />} />


        </BottomNavigation>
      </Paper>
    </div>
  );
}

export default Footer;