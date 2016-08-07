import Backbone from 'backbone';

import store from '../store';
import SearchMod from '../models/SearchMod';

const SearchCollection = Backbone.Collection.extend({
  url: `https://api.spotify.com/v1/search`,
  model: SearchMod,
  getResults: function(q) {
    store.fetching = true;
    this.fetch({
      data: {q: q, type: 'artist'},
      success: (data) => {
        store.fetching = false;
        let artists = data.models[0].get('artists').items;
        artists.forEach((artist) => {
          let image;
          if (!artist.images[0].url) {
            image = 'http://i607.photobucket.com/albums/tt160/SaikoSakura/Beatles%20Rock%20Band%20Icons/Drums-TBRB-Icon.png'
          } else {
            image = artist.images[0].url
          }
          this.add({
            id: artist.id,
            name: artist.name,
            src: artist.href,
            popularity: artist.popularity,
            image: image
          });
        });
      }
    });
    }
});

export default SearchCollection;
