import React from 'react';
import {hashHistory} from 'react-router';

import store from '../store';

const Modal = React.createClass({
  backHome: function() {
    if (location.hash.split('/')[1] === 'votedFor') {
      hashHistory.push('/votedFor');
    } else {
      hashHistory.push('/');
    }
  },
  vote: function(e) {
    if (location.hash.split('/')[1] === 'votedFor') {
      let model = store.votedForCollection.get(this.props.params.artistId);
      model.newVote();
    } else {
      if (!store.votedForCollection.get(this.props.params.artistId)) {
        store.votedForCollection.create({
          name: this.state.get('name'),
          id: this.props.get('id'),
          image: this.props.get('image'),
          voters: {
            user: [localStorage.username]
          }
        });
      } else {
        let model = store.votedForCollection.get(this.props.params.artistId);
        console.log(model);
        model.newVote();
      }
    }
  },
  getInitialState: function() {
    let model;
    if (location.hash.split('/')[1] === 'votedFor') {
      model = store.votedForCollection.get(this.props.params.artistId)
    } else {
      if (!store.searchCollection.get(this.props.params.artistId)) {
        model = store.searchCollection.add({id: this.props.params.artistId})
      }
    }
    return model.toJSON();
  },
  // componentDidMount: function() {
  //   this.setState(store.searchCollection.get(this.props.params.artistId));
  // },
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
    console.log(this.state);
    let voteLabel = 'votes';
    let voteMessage = 'Vote';
    let votes = 0;
    let votedFor = store.votedForCollection.get(this.props.params.artistId);
    if (votedFor) {
      if (votedFor.get('votes') === 1) {voteLabel = 'vote'}
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
        <img src='#'/>
        <div className="artist-info">
          <p id="popularity">Popularity: {this.state.popularity}</p>
          <p id="followers">{this.state.followers} Followers</p>
          <p id="votes-modal">{votes} {voteLabel}</p>
          <button onClick={this.vote} id="vote-from-modal">{voteMessage}</button>
        </div>
      </div>
    </div>
    );
  }
});

export default Modal;
