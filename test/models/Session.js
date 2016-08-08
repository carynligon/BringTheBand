import { expect } from 'chai';
import Session from '../../app/scripts/models/Session';

describe('Session', function() {
  let testSession = new Session();
  it('should exist', () => {
    expect(testSession).to.exist;
  });
  it('should respond to logout method', () => {
    expect(testSession).to.respondTo('logout');
  });
  it('should clear session when logged out', () => {
    testSession.save({
      username: 'caryn',
      password: '1234'
    });
    expect(testSession.get('username') === 'caryn').to.be.true;
    testSession.save(null, {
      url: `https://baas.kinvey.com/user/kid_H1_IyAJF/_logout`});
    testSession.clear();
    expect(!testSession.get('username')).to.be.true;
  });
});
