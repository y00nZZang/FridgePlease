/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import categorys from '../../public/category';

function SubCategoryBar(props) {
  const { curCategory, sortBy, setSortBy, subCategory, setSubCategory } = props;

  return (
    <Toolbar
      component="nav"
      sx={{
        overflowX: 'auto',
        flexWrap: 'nowrap',
        minHeight: '40px',
      }}
    >
      <Box sx={{ marginRight: 1 }}>
        <Button
          variant="outlined"
          disableElevation
          size="small"
          sx={{ borderRadius: 50 }}
        >
          Outlined
        </Button>
      </Box>
      <Box sx={{ marginRight: 1 }}>
        <Button
          variant="outlined"
          disableElevation
          size="small"
          sx={{ borderRadius: 50 }}
        >
          Outlined
        </Button>
      </Box>
      <Box sx={{ marginRight: 1 }}>
        <Button
          variant="outlined"
          disableElevation
          size="small"
          sx={{ borderRadius: 50 }}
        >
          Outlined
        </Button>
      </Box>
      <Box sx={{ marginRight: 1 }}>
        <Button
          variant="outlined"
          disableElevation
          size="small"
          sx={{ borderRadius: 50 }}
        >
          Outlined
        </Button>
      </Box>
      <Box sx={{ marginRight: 1 }}>
        <Button
          variant="outlined"
          disableElevation
          size="small"
          sx={{ borderRadius: 50 }}
        >
          Outlined
        </Button>
      </Box>
      {Object.entries(categorys[curCategory].subCategory).map(
        ([index, val]) => (
          <Box sx={{ marginRight: 1 }}>
            <Button
              key={index}
              variant="outlined"
              size="small"
              sx={{ borderRadius: 50, wordBreak: 'normal' }}
            >
              <Typography noWrap>{val.name}</Typography>
            </Button>
          </Box>
        ),
      )}
    </Toolbar>
  );
}

SubCategoryBar.propTypes = {
  curCategory: PropTypes.string.isRequired,
  sortBy: PropTypes.string.isRequired,
  setSortBy: PropTypes.func.isRequired,
  subCategory: PropTypes.string.isRequired,
  setSubCategory: PropTypes.func.isRequired,
};

export default SubCategoryBar;
