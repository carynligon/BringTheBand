import React from 'react';

import store from '../store';
import VotedForBandListing from './VotedForBandListing';

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
  getBands: function() {
    let bands = this.state.data.map((band, i) => {
    return <VotedForBandListing key={i} name={band.name} id={band.id} image={band.image} voters={band.voters} votes={band.votes}/>
    });
    return bands;
  },
  render: function() {
    let bands = this.getBands();
    return (
      <section>
        <ul id="voted-for-list">
          {bands}
        </ul>
      </section>
    );
  }
});

export default VotedForPage;
