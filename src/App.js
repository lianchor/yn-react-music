import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';

import routes from './router';

export default memo(function App() {
  return (
    <HashRouter>
      {renderRoutes(routes)}
    </HashRouter>
  )
})
