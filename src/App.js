import React from 'react';

import DataComponent from './components/DataComponent'
import LoadingComponent from './components/LoadingComponent'
import ErrorComponent from './components/ErrorComponent'

function App() {

  return (
    <div>
      <DataComponent/>
      <LoadingComponent/>
      <ErrorComponent/>
    </div>
  );
}

export default App;
