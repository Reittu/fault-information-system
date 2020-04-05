import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import CustomAppBar from './components/CustomAppBar';
import ToolDrawer from './components/ToolDrawer';

const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
  },
  content: {
      flexGrow: 1,
      paddingTop: '84px',
      height: '100vh'
  }
}));

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
      setOpen(true);
  };

  const handleDrawerClose = () => {
      setOpen(false);
  };

  return (
      <div className={classes.root}>
          <CssBaseline />
          <CustomAppBar open={open} menuClick={handleDrawerOpen} />
          <ToolDrawer open={open} handleDrawerClose={handleDrawerClose} />
      
          <main className={classes.content}>
            <p>Placeholder content</p>
            <p>Placeholder content</p>
            <p>Placeholder content</p>
          </main>
      </div>
  );
}

export default App;
