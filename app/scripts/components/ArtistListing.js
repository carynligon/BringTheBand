import React from 'react';

import store from '../store';

const ArtistListing = React.createClass({
  getInitialState: function() {
    return {data: store.votedForCollection.toJSON()};
  },
  listener: function() {
    this.setState({data: store.votedForCollection.toJSON()});
  },
  componentDidMount: function() {
    store.votedForCollection.on('change add', this.listener);
    store.votedForCollection.fetch();
  },
  componentWillUnmount: function() {
    store.votedForCollection.off('change add', this.listener);
  },
  vote: function(e) {
    if (!store.votedForCollection.get(this.props.id)) {
      store.votedForCollection.create({
        name: this.props.name,
        id: this.props.id,
        image: this.props.image,
        voters: {
          user: [localStorage.username]
        }
      });
    } else {
      let model = store.votedForCollection.get(this.props.id);
      console.log(model);
      model.newVote();
    }
  },
  render: function() {
    let votes;
    let voteLabel = 'votes';
    if (store.votedForCollection.get(this.props.id)) {
      let votedFor = store.votedForCollection.get(this.props.id);
      votes = votedFor.get('votes');
      if (votes === 1) {voteLabel = 'vote'}} else {votes = 0;}
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
        <button name="vote" id={this.props.id} onClick={this.vote}>{votes} {voteLabel}</button>
      </li>
    );
  }
});

export default ArtistListing;
