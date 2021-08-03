import React from 'react';
import {
  Switch,
  Route,
  withRouter,
  RouteComponentProps
} from 'react-router-dom';

import { Stateful, Utils } from '@nexys/material-components';
import * as Links from 'common/link';

import Layout from '../layout';
import SuperAdmin from './superadmin';

const {
  Auth: { Wrapper },
  Conf: { REDIRECT_URI }
} = Stateful;

function SuperAdminRoutes(props: RouteComponentProps) {
  const handleOnIdle = () => {
    Stateful.Store.set('sessionExpired', true);
    Stateful.Store.set(REDIRECT_URI, props.location.pathname);
    window.location.pathname = Links.Public.logout;
  };

  Utils.useIdleTimer(handleOnIdle, 60);

  return (
    <Layout>
      <Switch>
        <Route path={Links.SuperAdmin.base} component={SuperAdmin} />
      </Switch>
    </Layout>
  );
}

export default withRouter(Wrapper(SuperAdminRoutes, 'superadmin'));
