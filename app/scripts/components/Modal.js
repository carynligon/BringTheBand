import React from 'react';
import {hashHistory} from 'react-router';

import store from '../store';

const Modal = React.createClass({
  backHome: function() {
    hashHistory.push('/');
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
  getInitialState: function() {
    return {}
  },
  componentDidMount: function() {
    let artist = store.searchCollection.get(this.props.params.artistId);
    this.setState(artist.toJSON());
  },
  containerStyles: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: 'rgba(0,0,0,.5)'
  },
  contentStyles: {
    background: 'white',
    width: '700px',
    margin: '0 auto',
    height: '60vh',
    marginTop: '12.5%',
    overflow: 'scroll'
  },
  render: function() {
    let voteMessage = 'Vote';
    let votes = 0;
    let votedFor = store.votedForCollection.get(this.props.params.artistId);
    if (votedFor) {
      if (votedFor.get('voters').user.indexOf(localStorage.username) !== -1) {
        voteMessage = 'You have voted';
        votes = votedFor.get('votes');
      }
    }
    return(
    <div className="modal-container" style={this.containerStyles}>
      <div className="modal-content" style={this.contentStyles}>
        <button id="close-modal" onClick={this.backHome}>back</button>
        <h3>{this.state.name}</h3>
        <img src={this.state.image}/>
        <div className="artist-info">
          <p id="popularity">Popularity: {this.state.popularity}</p>
          <p id="followers">{this.state.followers} Followers</p>
          <p id="votes-modal">{votes} Votes</p>
          <button onClick={this.vote} id="vote-from-modal">{voteMessage}</button>
        </div>
      </div>
    </div>
    );
  }
});

export default Modal;
