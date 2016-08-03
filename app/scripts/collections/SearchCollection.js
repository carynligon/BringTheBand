import Backbone from 'backbone';

const SearchCollection = Backbone.Collection.extend({
  url: `https://api.spotify.com/v1/search`,
  getResults: function(q) {
    this.fetch({
      data: {q: q, type: 'artist'},
      success: (data) => {
        console.log(data);
      }
    });
  }
});

export default SearchCollection;
