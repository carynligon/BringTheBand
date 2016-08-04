import Backbone from 'backbone';

import settings from '../settings';

const VotedForModel = Backbone.Model.extend({
  urlRoot: `https://baas.kinvey.com/appdata/${settings.appKey}/VotedFor`,
  idAttribute: 'id',
  defaults: {
    votes: 1,
  },
  newVote: function() {
    this.get('voters').user = this.get('voters').user.concat('new user');
    this.set({
      votes: this.get('votes') + 1
    });
    this.save();
  },
});

export default VotedForModel;
