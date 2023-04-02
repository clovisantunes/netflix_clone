import React from 'react';
import './App.css';
import ROW from './components/Row';
import categories from './Tmdb'
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      {categories.map((category) => {
        return<ROW 
          key={category.name}
          title={category.title}
          path={category.path} 
          isLarge={category.isLarge}
          />;

      })}
    </div>
  );
}

export default App;
