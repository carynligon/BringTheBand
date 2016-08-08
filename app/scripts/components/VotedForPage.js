import React from 'react';

import store from '../store';
import Nav from './Nav';
import AristListing from './ArtistListing';

const VotedForPage = React.createClass({
  getInitialState: function() {
    return {data: store.votedForCollection.toJSON()}
  },
  listener: function() {
    this.setState({data: store.votedForCollection.toJSON()});
  },
  componentDidMount: function () {
    store.votedForCollection.on('change add', this.listener);
    store.votedForCollection.fetch();
  },
  componentWillUnmount: function() {
    store.votedForCollection.off('change add', this.listener);
  },
  getBands: function() {
    let bands = this.state.data.map((band, i) => {
      console.log(band.image);
    return <AristListing key={i} name={band.name} id={band.id} image={band.image} voters={band.voters} votes={band.votes}/>
    });
    return bands;
  },
  render: function() {
    let bands = this.getBands();
    return (
      <section>
        <Nav/>
        <ul id="voted-for-list">
          {bands}
        </ul>
        {this.props.children}
      </section>
    );
  }
});

export default VotedForPage;
