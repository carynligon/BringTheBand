import React from 'react';

import Search from './Search';

const Header = React.createClass({
  render: function() {
    return (
      <header>
        <h1>Search</h1>
        <Search/>
      </header>
    );
  }
});

export default Header;
