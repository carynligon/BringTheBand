import React from 'react';
import {hashHistory} from 'react-router';

import store from '../store';
import Modal from './Modal';

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
        },
        popularity: this.props.popularity,
        followers: this.props.followers
      });
    } else {
      let model = store.votedForCollection.get(this.props.id);
      console.log(model);
      model.newVote();
    }
  },
  showModal: function(e) {
    hashHistory.push(`/${this.props.id}`)
  },
  render: function() {
    let votes;
    if (store.votedForCollection.get(this.props.id)) {
      let votedFor = store.votedForCollection.get(this.props.id);
      votes = votedFor.get('votes');
      } else {votes = 0;}
    let image;
    if (this.props.image.length === 0) {
      image = 'http://i607.photobucket.com/albums/tt160/SaikoSakura/Beatles%20Rock%20Band%20Icons/Drums-TBRB-Icon.png';
    } else {
      image = this.props.image[0].url;
    }
    let styles = {
      backgroundImage: 'url(' + image + ')'
    }
    return (
      <li>
        <div className="artist-image" style={styles}></div>
        <div className="artist-image-overlay" style={styles} onClick={this.showModal}></div>
        <h3>{this.props.name}</h3>
        <button name="vote" id={this.props.id} onClick={this.vote}>{votes}</button>
      </li>
    );
  }
});

export default ArtistListing;
