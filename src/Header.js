import './App.css';
import { Typography, AppBar, Toolbar } from '@mui/material/'


const Header = () => {
  return (
    <div className="Header">
      <AppBar 
        sx={{ 
          
        }}
      >
        <Typography variant="h3" align="center">
          ScoreKeeper
        </Typography>
      </AppBar>
    </div>
  );
}

export default Header;