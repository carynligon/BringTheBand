import React from 'react';

import store from '../store';

const ArtistListing = React.createClass({
  vote: function(e) {
    console.log(e.target.id);
    store.votedForCollection.create();
  },
  render: function() {
    let image;
    if (!this.props.image[0]) {
      image = 'http://i607.photobucket.com/albums/tt160/SaikoSakura/Beatles%20Rock%20Band%20Icons/Drums-TBRB-Icon.png';
    } else {
      image = this.props.image[0].url;
    }
    let styles = {
      backgroundImage: 'url(' + image + ')'
    }
    return (
      <li>
        <div className="artist-image" style={styles}>
        </div>
        <h3>{this.props.name}</h3>
        <input type="button" name="vote" id={this.props.id} value="vote" onClick={this.vote}/>
      </li>
    );
  }
});

export default ArtistListing;
