import React from 'react';

import Nav from './Nav';
import Header from './Header';
import SearchResults from './SearchResults';

const HomePage = React.createClass({
  render: function() {
    return (
      <main>
        <Nav/>
        <Header/>
        <SearchResults/>
      </main>
    );
  }
});

export default HomePage;
