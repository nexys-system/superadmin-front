import React from 'react';
import useTheme from '@material-ui/core/styles/useTheme';
import LogoutIcon from '@material-ui/icons/ExitToApp';

import { UI, Utils } from '@nexys/material-components';
import * as Links from 'common/link';
import { appTitle } from 'config';

const {
  Nav: { Top }
} = UI;

const useStyles = Utils.makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.background.paper
    // boxShadow: 'none'
  }
}));

interface Props {
  isOpen: boolean;
  onToggle?: (isOpen: boolean) => void;
}

export default ({ isOpen, onToggle }: Props) => {
  const theme = useTheme();
  const classes = useStyles();

  const menus = [{ link: Links.Public.logout, Icon: LogoutIcon }];

  return (
    <Top
      title={appTitle}
      menus={menus}
      className={classes.appBar}
      isOpen={isOpen}
      textColor={theme.palette.primary.main}
      onToggle={onToggle}
    />
  );
};
