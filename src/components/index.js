import React from 'react';
import '../App.css';
import ROW from './Row/Row';
import categories from '../Tmdb'
import Banner from '../components/Banner/Banner';
import Nav from './nav/Nav';



function Menu() {
  return (
    <div className="Menu">
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

export default Menu;