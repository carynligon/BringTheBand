import Backbone from 'backbone';
import settings from '../settings';

const UserMod = Backbone.Model.extend({
  url: `https://baas.kinvey.com/user/${settings.appKey}`,
  defaults: {
    username: '',
    authtoken: ''
  },
  parse: function(response) {
    if (response) {
      return {
        authtoken: response._kmd.authtoken,
        username: response.username,
        userId: response._id
      };
    }
  }
});

export default UserMod;
