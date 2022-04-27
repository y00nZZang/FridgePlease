import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Avatar } from '@mui/material';

function Item(props) {
  const { item } = props;

  return (
    <Grid item xs={12} md={6} sx={{ marginBottom: 3 }}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex', backgroundColor: item.back }}>
          <CardContent sx={{ flex: 1 }}>
            <Avatar
              alt={item.imageLabel}
              src={item.image}
              sx={{ width: 120, height: 120, float: 'left' }}
            />
            <Typography component="h2" variant="h5">
              {item.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {item.exdate}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {item.purdate}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {item.memo}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={item.image}
            alt={item.imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    back: PropTypes.string.isRequired,
    exdate: PropTypes.string.isRequired,
    purdate: PropTypes.string.isRequired,
    memo: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
  }).isRequired,
};

export default Item;
