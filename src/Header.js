import './App.css';
import { Typography, AppBar, Toolbar } from '@mui/material/'


const Header = () => {
  return (
    <div className="Header">
      <AppBar>
        <Typography variant="h3" align="center">
          ScoreKeeper
        </Typography>
      </AppBar>
      {/* <Toolbar /> */}
    </div>
  );
}

export default Header;