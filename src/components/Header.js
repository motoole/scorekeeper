import { Typography, AppBar } from '@mui/material/'

const Header = () => {
  return (
    <div className="Header">
      <AppBar>
        <Typography variant="h3" align="center">
          ScoreKeeper
        </Typography>
      </AppBar>
    </div>
  );
}

export default Header;