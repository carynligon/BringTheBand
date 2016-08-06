import Backbone from 'backbone';

import store from '../store';

const SearchCollection = Backbone.Collection.extend({
  url: `https://api.spotify.com/v1/search`,
  getResults: function(q) {
    store.fetching = true;
    this.fetch({
      data: {q: q, type: 'artist'},
      success: (data) => {
        console.log(data);
        store.fetching = false;
      }
    });
  }
});

export default SearchCollection;
