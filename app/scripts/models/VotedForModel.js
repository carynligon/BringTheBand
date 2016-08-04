import Backbone from 'backbone';

import settings from '../settings';

const VotedForModel = Backbone.Model.extend({
  urlRoot: `https://baas.kinvey.com/appdata/${settings.appKey}/VotedFor`,
  idAttribute: 'id',
  defaults: {
    votes: 1,
  },
  newVote: function() {
    if (this.get('voters').user.indexOf(localStorage.username) === -1) {
      this.get('voters').user = this.get('voters').user.concat(localStorage.username);
      this.set({
        votes: this.get('votes') + 1
      });
      this.save();
    } else {
      console.log('already voted');
    }
  },
});

export default VotedForModel;
