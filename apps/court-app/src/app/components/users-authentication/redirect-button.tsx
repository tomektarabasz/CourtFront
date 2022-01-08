import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';

import { Button, createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      height: 'fit-content',
      width: 'max-content',
      '&:hover': {
        borderColor: theme.palette.primary.dark,
      },
    },
  })
);

interface RedirectButtonProp {
  path: string;
  text: React.ReactNode;
}

export const RedirectButton: React.FC<RedirectButtonProp> = ({
  path,
  text,
}) => {
  const classes = useStyles();
  const browserHistory = useHistory();
  const handleClick = useCallback(() => {
    browserHistory.push(path);
  }, []);
  return (
    <Button
      className={clsx(classes.button)}
      variant="outlined"
      color="primary"
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};
