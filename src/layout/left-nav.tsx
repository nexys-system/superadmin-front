import React from 'react';

// Icon import
import {
  VpnKey as PermissionIcon,
  Storage as InstanceIcon,
  AccountTree as EntityIcon,
  Apps as AppsIcon
} from '@material-ui/icons';
// end icon

import { UI, Stateful, Utils } from '@nexys/material-components';
import * as Link from 'common/link';

const useStyles = Utils.makeStyles(theme => ({
  drawer: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: theme.spacing(8)
  },
  menuItem: {
    color: `${theme.palette.primary.contrastText} !important`
  },
  label: {
    color: 'white'
  }
}));

interface TMenu {
  link: string;
  label: React.ReactNode;
  Icon: any;
  permission: string;
}

const {
  Nav: {
    Left: { Drawer, Menu, Divider }
  }
} = UI;

const superAdminPermission = 'superadmin';

const Label = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const classes = useStyles();

  return <span className={classes.label}>{children}</span>;
};

const listSuperAdmin: TMenu[] = [
  {
    link: Link.SuperAdmin.base,
    label: <Label>Superadmin Dashboard</Label>,
    Icon: AppsIcon,
    permission: superAdminPermission
  },
  {
    link: Link.SuperAdmin.permission,
    label: <Label>Permissions</Label>,
    Icon: PermissionIcon,
    permission: superAdminPermission
  },
  {
    link: Link.SuperAdmin.instance,
    label: <Label>Instance</Label>,
    Icon: InstanceIcon,
    permission: superAdminPermission
  },
  {
    link: Link.SuperAdmin.entity,
    label: <Label>Entities</Label>,
    Icon: EntityIcon,
    permission: superAdminPermission
  }
];

export default ({ isOpen }: { isOpen: boolean }) => {
  const classes = useStyles();

  // list of permissions from profile
  const permissions =
    Stateful.Credentials.getPermissions().sort((a: string, b: string) => {
      if (a < b) {
        return -1;
      }

      if (a > b) {
        return 1;
      }

      return 0;
    }) || [];

  return (
    <Drawer
      isOpen={isOpen}
      onClose={() => {}}
      classNames={{ paper: classes.drawer }}
      hideToggleButton={true}
    >
      <Menu
        list={listSuperAdmin.filter(x => permissions.includes(x.permission))}
        classNames={{ icon: classes.menuItem, item: classes.menuItem }}
      />
    </Drawer>
  );
};
