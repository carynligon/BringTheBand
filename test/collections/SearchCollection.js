import { expect } from 'chai';
import SearchCollection from '../../app/scripts/collections/SearchCollection';

describe('Search Collection', function() {
  it('should exist', () => {
    expect(SearchCollection).to.exist;
  });
  let searchCollectionTest = new SearchCollection();
  it('should respond to the getResults method', () => {
    expect(searchCollectionTest).to.respondTo('getResults');
  });
  it('should get correct data based on search parameter, beyonce should return 16 results', () => {
    searchCollectionTest.getResults('beyonce');
    searchCollectionTest.on('change, add', () => {
      expect(searchCollectionTest.get('artists').items.length === 16).to.be.true;
    });
  });
  it('should get correct data based on search parameter, chance should return 20 results', () => {
    searchCollectionTest.getResults('chance');
    searchCollectionTest.on('change, add', () => {
      expect(searchCollectionTest.get('artists').items.length === 20).to.be.true;
    });
  });
});
