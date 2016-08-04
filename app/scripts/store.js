import SearchCollection from './collections/SearchCollection';
import VotedForCollection from './collections/VotedForCollection';
import Session from './models/Session';

export default {
  searchCollection: new SearchCollection(),
  fetching: false,
  votedForCollection: new VotedForCollection(),
  session: new Session()
}
