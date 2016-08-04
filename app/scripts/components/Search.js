import React from 'react';

import store from '../store';

const Search = React.createClass({
  getSearch: function(e) {
    e.preventDefault();
    let search = this.refs.search.value;
    store.searchCollection.getResults(search);
  },
  render: function() {
    return (
      <form className="search-form" onSubmit={this.getSearch}>
        <input type="text" name="search-input" id="search-input" placeholder="Search for any artist" ref="search"/>
        <input type="submit" name="submit-search" id="submit-search" value="Go"/>
      </form>
    );
  }
});

export default Search;
