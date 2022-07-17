import fetch from 'node-fetch'
import './App.css';
import React, {useState} from 'react';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { TrackChanges } from '@mui/icons-material';
import { Spinner } from './components/Spinner';



function App() {

  const [data, setData] = useState({time: ""});

  // Figure out how to not do this every fuckin millsecond
  fetch("http://localhost:5000/time")
    .then((r: any) => r.json())
    .then((r: any) => {
      setData(r as any);
    })

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <TrackChanges />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Spinner
          </Typography>
        </Toolbar>
      </AppBar>
      <body>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            It is {JSON.stringify(data.time)}
          </Grid>
          <Grid item xs={12}>
            <Spinner />
          </Grid>
        </Grid>
      </body>
    </div>
  );
}

export default App;
