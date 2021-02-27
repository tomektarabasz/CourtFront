import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { customeThemeResponsive } from '../assets/customeTheme';
import { searchCity } from './api/router/paths';
import { createAppStore } from './api/state/store';

import { Home } from './pages/Home/Home';
import { Background } from './pages/Home/Home.styled';

const store = createAppStore();

export function App() {
  return (
    <Background>
      <Provider store={store}>
        <ThemeProvider theme={customeThemeResponsive}>
          <BrowserRouter>
            <Switch>
              <Route path={searchCity()} component={Home} />
              <Route path="/*" component={Home} />
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </Background>
  );
}

export default App;
