import { expect } from 'chai';
import UserMod from '../../app/scripts/models/UserMod';

describe('User Model', function() {
  it('should exist', () => {
    expect(UserMod).to.exist;
  });

  it('should respond to parse function', () => {
    expect(UserMod).to.respondTo('parse');
  });
});
