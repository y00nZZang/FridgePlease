import React from 'react';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import category from '../../public/category';

function Category() {
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={1}
      sx={{ height: '30vh', p: 1 }}
    >
      {Object.entries(category).map((cat, index) => (
        <Grid item xs={3} key={index}>
          <Button fullWidth sx={{ height: 1 }}>
            <Avatar src={process.env.PUBLIC_URL + cat[1].img} />
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}

export default Category;
