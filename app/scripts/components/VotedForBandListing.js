import React from 'react';

const VotedForBandListing = React.createClass({
  render: function() {
    let styles = {backgroundImage: 'url(' + this.props.image[0].url + ')'}
    return (
      <li>
        <div className="artist-image" style={styles}></div>
        <div className="artist-image-overlay" style={styles}></div>
        <h3>{this.props.name}</h3>
        <button name="vote" id={this.props.id}>{this.props.votes}</button>
      </li>
    );
  }
});

export default VotedForBandListing;
