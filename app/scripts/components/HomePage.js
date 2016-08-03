import React from 'react';

import Header from './Header';
import SearchResults from './SearchResults';

const HomePage = React.createClass({
  render: function() {
    return (
      <main>
        <Header/>
        <SearchResults/>
      </main>
    );
  }
});

export default HomePage;
