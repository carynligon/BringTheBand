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
  votedForCollectionTest.create({
    name: 'test',
    votes: 1,
    voters: {
      user: ['caryn']
    },
    image: 'holder'
  });
  votedForCollectionTest.fetch();
  votedForCollectionTest.on('change add', () => {
    console.log(votedForCollectionTest);
  });
});
