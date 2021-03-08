import { ThemeProvider } from '@material-ui/core';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { customeThemeResponsive } from '../assets/customeTheme';
import { searchCity } from './api/router/paths';
import { createAppStore } from './api/state/store';

import { Home } from './pages/Home/Home';
import { Layout } from './components/layout';

const store = createAppStore();

export function App() {
  return (
    <Layout>
      <Provider store={store}>
        <ThemeProvider theme={customeThemeResponsive}>
          <StyledComponentsThemeProvider theme={customeThemeResponsive}>
            <BrowserRouter>
              <Switch>
                <Route path={'/selected/:selectedCityId'} component={Home} />
                <Route path={'/search/:queryCityName'} component={Home} />
                <Route path="/*" component={Home} />
              </Switch>
            </BrowserRouter>
          </StyledComponentsThemeProvider>
        </ThemeProvider>
      </Provider>
    </Layout>
  );
}

export default App;
