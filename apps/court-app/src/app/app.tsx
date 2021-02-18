import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { customeThemeResponsive } from '../assets/customeTheme';

import { Home } from './pages/Home/Home';

export function App() {
  return (
    <ThemeProvider theme={customeThemeResponsive}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home}/>
    </Switch>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
