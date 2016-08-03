import React from 'react';

import store from '../store';

import ArtistListing from './ArtistListing';

const SearchResults = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentDidMount: function() {
    store.searchCollection.on('add', () => {
      this.setState(store.searchCollection.toJSON());
    });
  },
  render: function() {
    let artistArr;
    if (this.state[0]) {
      let artists = this.state[0].artists.items;
      artistArr = artists.map((artist, i) => {
        return <ArtistListing key={i} name={artist.name} image={artist.images} popularity={artist.popularity} id={artist.id}/>
      });
    }
    return (
      <section>
        <ul id="search-results-list">
          {artistArr}
        </ul>
      </section>
    );
  }
});

export default SearchResults;
