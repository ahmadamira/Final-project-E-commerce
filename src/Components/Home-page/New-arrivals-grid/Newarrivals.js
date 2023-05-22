import React from 'react';
import { Container, Grid } from '@mui/material';
import Cardcom from '../../Card-com/Card';

const Newarrivals = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} justifyContent="center">
        {arr.map((data) => (
          <Grid item key={data} xs={12} sm={6} md={4} lg={3} xl={3}>
            <Grid container justifyContent="center">
              <Cardcom />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Newarrivals;
