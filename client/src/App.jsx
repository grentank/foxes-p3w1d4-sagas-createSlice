import React from 'react';
import { Container, Grid } from '@mui/material';
import MyForm from './components/MyForm';
import MyList from './components/MyList';

function App() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <MyForm />
        </Grid>
        <MyList />
      </Grid>
    </Container>
  );
}

export default App;
