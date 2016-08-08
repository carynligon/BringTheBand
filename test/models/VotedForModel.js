import { expect } from 'chai';
import VotedForModel from '../../app/scripts/models/VotedForModel';
import VotedForCollection from '../../app/scripts/collections/VotedForCollection';

describe('VotedFor Model', function() {
  let votedForModelTest = new VotedForModel ();
  let votedForCollectionTest = new VotedForCollection ();
  it('should exist', () => {
    expect(votedForModelTest).to.exist;
  });
  it('should respond to newVote method', () => {
    expect(votedForModelTest).to.respondTo('newVote');
  });
  it('should cast a new vote'), () => {
    expect(votedForCollectionTest.get('votes') === 0).to.be.true
    votedForCollectionTest.newVote();
    votedForCollectionTest.on('change add', () => {
      expect(votedForCollectionTest.get('votes') === 1).to.be.true
    });
    votedForCollectionTest.fetch();
  }
});
