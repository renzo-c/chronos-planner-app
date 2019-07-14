import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const MadeBy = () => {
    return (
      <Typography
        variant="body2"
        color="textPrimary"
        align="center"
        className="alignFooter"
      >
        {'Built by  '}
        <Link
          color="primary"
          href="https://www.linkedin.com/in/renzo-navarro-29a83528/"
          target="_blank"
        >
          Renzo Navarro
        </Link>
      </Typography>
    );
  };

  export default MadeBy;