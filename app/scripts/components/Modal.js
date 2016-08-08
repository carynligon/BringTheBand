import React from 'react';

import store from '../store';

const Modal = React.createClass({
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
    return(
    <div className="modal-container" style={this.containerStyles}>
      <div className="modal-content" style={this.contentStyles}>
        <h3>{this.state.name}</h3>
        <img src={this.state.image}/>
        <div className="artist-info">
          <p id="popularity">Popularity: {this.state.popularity}</p>
          <p id="followers">{this.state.followers} Followers</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
    );
  }
});

export default Modal;
