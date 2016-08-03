import Backbone from 'backbone';

import settings from '../settings';

const VotedForModel = Backbone.Model.extend({
  urlRoot: `https://baas.kinvey.com/appdata/${settings.appKey}`,
  defaults: {
    votes: []
  }
});
