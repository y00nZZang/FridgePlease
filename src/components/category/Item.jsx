import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Slider from '@mui/material/Slider';
import { Box } from '@mui/material';

import categorys from '../../public/category';
import { updateItemConsumption } from '../../modules/items';

function Item(props) {
  const dispatch = useDispatch();
  const { item } = props;

  const [consumptionRate, setConsumptionRate] = useState(
    item.consumptionRate * 100,
  );

  const [bgColor, setBgColor] = useState('');

  useEffect(() => {
    if (item.elapsedRate < 0.1) {
      setBgColor('#ffa19950');
    } else if (item.elapsedRate < 0.3) {
      setBgColor('#ffda9950');
    } else {
      setBgColor('#d6ffa650');
    }
  }, []);

  const handleChange = (event, newValue) => {
    setConsumptionRate(newValue);
  };

  const updateConsumptionRate = (event, newValue) => {
    const newRate = newValue / 100;
    dispatch(updateItemConsumption({ key: item.key, newRate }));
  };

  return (
    <CardActionArea
      onClick={() => {
        console.log('clicked');
      }}
      sx={{ mb: 1 }}
    >
      <Card
        sx={{
          backgroundColor: bgColor,
          m: 1,
        }}
      >
        <Box
          sx={{
            height: '15vh',
            display: 'flex',
            backgroundColor: bgColor,
          }}
        >
          <CardMedia
            component="img"
            src={process.env.PUBLIC_URL + categorys[item.category].img}
            sx={{
              height: '15vh',
              width: '15vh',
              p: 1,
            }}
          />
          <CardContent
            sx={{
              height: '15vh',
              p: 1,
              overflow: 'hidden',
            }}
          >
            <Typography component="h2" variant="h5" sx={{ fontWeight: 'bold' }}>
              {item.name}
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
              {new Date(item.expDate).getMonth() + 1}월{' '}
              {new Date(item.expDate).getDate()}일
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {new Date(item.mfgDate).getMonth() + 1}월{' '}
              {new Date(item.mfgDate).getDate()}일
            </Typography>
            <Typography variant="subtitle1" noWrap>
              {item.memo}
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{ paddingX: 2 }}>
          <Slider
            value={consumptionRate}
            onChange={handleChange}
            onChangeCommitted={updateConsumptionRate}
          />
        </Box>
      </Card>
    </CardActionArea>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    key: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    expDate: PropTypes.string.isRequired,
    mfgDate: PropTypes.string.isRequired,
    memo: PropTypes.string.isRequired,
    totalVol: PropTypes.number.isRequired,
    curVol: PropTypes.number.isRequired,
    countable: PropTypes.bool.isRequired,
    elapsedRate: PropTypes.number.isRequired,
    consumptionRate: PropTypes.number.isRequired,
  }).isRequired,
};

export default Item;
