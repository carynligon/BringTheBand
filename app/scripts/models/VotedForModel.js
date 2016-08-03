import Backbone from 'backbone';

import settings from '../settings';

const VotedForModel = Backbone.Model.extend({
  urlRoot: `https://baas.kinvey.com/appdata/${settings.appKey}`,
  idAttribute: 'id',
  defaults: {
    votes: {
      quantity: 0,
      voters: []
    }
  },
  newVote: function() {
    this.votes.set({
      quantity: this.votes.quanity++,
      voters: voters.push('person logged in')
    });
  }
});
