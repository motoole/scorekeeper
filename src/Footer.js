import * as React from 'react';
import './App.css';
// import { useHistory } from 'react-router-dom';
import { Routes, Route, Outlet, Link } from "react-router-dom";

// mui components
import { 
  Paper,
  BottomNavigation,
  BottomNavigationAction
} from '@mui/material';

// mui icons
import {
  List,
  Settings,
  People
} from '@mui/icons-material';

const Footer = () => {
  const [value, setValue] = React.useState(0);
  return (
    <div className="Footer">
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
              component={Link}
              to="/signal"
              label="List"
              value="signal"
              icon={<List />}
          />
        </BottomNavigation>
      </Paper>
    </div>
  );
}

export default Footer;