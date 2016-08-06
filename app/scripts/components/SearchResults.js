import React from 'react';

import store from '../store';

import ArtistListing from './ArtistListing';

const SearchResults = React.createClass({
  getInitialState: function() {
    return {};
  },
  listener: function () {
    this.setState(store.searchCollection.toJSON());
  },
  componentDidMount: function() {
    store.searchCollection.on('add', this.listener);
    if (store.fetching === true) {
      document.getElementById('loader').style.display = 'none';
    } else {
      document.getElementById('loader').style.display = 'block';
    }
  },
  componentWillUnmount: function() {
    store.searchCollection.off('add', this.listener);
  },
  render: function() {
    console.log(store.fetching);
    let artistArr;
    if (this.state[0]) {
      let artists = this.state[0].artists.items;
      artistArr = artists.map((artist, i) => {
        return <ArtistListing key={i} name={artist.name} image={artist.images} popularity={artist.popularity} id={artist.id}/>
      });
    }
    return (
      <section>
        <div id="loader"></div>
        <ul id="search-results-list">
          {artistArr}
        </ul>
      </section>
    );
  }
});

export default SearchResults;
