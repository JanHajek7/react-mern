import React, { useEffect, useState } from 'react';
import { Message } from '@react-mern/api-interfaces';
import { Button } from '@material-ui/core';
import { AppBar, Toolbar, Grid, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

import './app.scss';

export const App = () => {
  const [m, setMessage] = useState<Message>({
    message: '',
  });

  const kokot = 'ja jsem velký kokot';

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid
          justify="space-between" // Add it here :)
          container
        >
          <Grid item>
            <Typography variant="h6">Project</Typography>
          </Grid>
          <Grid item>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Create</Button>
            <Button color="inherit">Overview</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default App;
