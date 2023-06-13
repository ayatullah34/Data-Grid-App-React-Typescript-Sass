import React from 'react';
import Header from './Header';
import TableSkeleton from './pages/data-grid/TableSkeleton';

function App() {
  return (
    <div className="App">
      <Header />
      <TableSkeleton />
    </div>
  );
}

export default App;
