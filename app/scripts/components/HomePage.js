import React from 'react';

import Nav from './Nav';
import Header from './Header';
import SearchResults from './SearchResults';

const images = [
  '../../assets/images/hero1-min.jpeg',
  '../../assets/images/hero2-min.jpeg',
  '../../assets/images/hero3-min.jpeg',
  '../../assets/images/hero4-min.jpeg'
];

const HomePage = React.createClass({
  render: function() {
    return (
      <main>
        <Nav/>
        <Header images={images}/>
        {this.props.children}
      </main>
    );
  }
});

export default HomePage;
