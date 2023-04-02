import React from 'react';
import './App.css';
import ROW from './components/Row';
import categories from './Tmdb'

function App() {
  return (
    <div className="App">
      {categories.map((category) => {
        return<ROW 
          key={category.name}
          title={category.title}
          path={category.path} 
          />;

      })}
    </div>
  );
}

export default App;
