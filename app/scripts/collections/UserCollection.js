import Backbone from 'backbone';
import UserMod from '../models/UserMod';
import settings from '../settings';

const UserCollection = Backbone.Collection.extend({
  url: `https://baas.kinvey.com/user/${settings.appKey}`,
  model: UserMod
});

export default UserCollection;
