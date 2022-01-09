import { ThemeProvider } from '@material-ui/core';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { customeThemeResponsive } from '../assets/customeTheme';
import { createAppStore } from './api/state/store';

import { Home } from './pages/home';
import { Layout } from './components/layout';
import { CityListPage } from './pages/city-list';
import { CourtListPage } from './pages/court-list';
import { SignInPage } from './pages/sign-in';
import { Login } from './pages/login';

const store = createAppStore();

export function App() {
  return (
    <Layout>
      <Provider store={store}>
        <ThemeProvider theme={customeThemeResponsive}>
          <StyledComponentsThemeProvider theme={customeThemeResponsive}>
            <Switch>
              <Route
                path={'/selected/:selectedCityId'}
                component={CourtListPage}
              />
              <Route path={'/search/:queryCityName'} component={CityListPage} />
              <Route path={'/login'} component={Login} />
              <Route path={'/signin'} component={SignInPage} />
              <Route path="/*" component={Home} />
            </Switch>
          </StyledComponentsThemeProvider>
        </ThemeProvider>
      </Provider>
    </Layout>
  );
}

export default App;
