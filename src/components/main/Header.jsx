import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import { Fab } from '@mui/material';

function Header(props) {
  const { sections } = props;

  return (
    <Toolbar
      component="nav"
      variant="dense"
      sx={{
        justifyContent: 'space-between',
        overflowX: 'auto',
        marginY: 2,
      }}
    >
      {sections.map(section => (
        <Link
          color="inherit"
          noWrap
          href={section.url}
          sx={{ p: 1, flexShrink: 0 }}
        >
          <Fab
            variant="extended"
            sx={{ p: 1, flexShrink: 0, backgroundColor: section.color }}
          >
            {section.title}
          </Fab>
        </Link>
      ))}
    </Toolbar>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Header;
