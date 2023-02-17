import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "./theme.js";
//RTL
import rtlPlugin from 'stylis-plugin-rtl';
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';
import {prefixer} from 'stylis';

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <CacheProvider value={cacheRtl}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <App/>
    </ThemeProvider>
  </CacheProvider>
)
