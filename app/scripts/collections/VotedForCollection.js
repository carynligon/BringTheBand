import Backbone from 'backbone';

import settings from '../settings';

const VotedForCollection = Backbone.Collection.extend({
  url: `https://baas.kinvey.com/appdata/${settings.appKey}`,
  model: VotedForModel
});

export default VotedForCollection;
