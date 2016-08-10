# Bring the Band App
 - **Assignment:**
   - Create an up-voting app for a local music venue!: A local music venue has asked you to build a promotional app: Bring The Band! Bring the band will allow users to vote for musicians they want to see at the venue. The venue hopes to gain a following, and boost their patron engagement by tracking popular bands, and trends in their market share.

- **Timeline:**
  - Aug.3 - Aug. 10


- **Process:**
  - [SCRUM - Trello](https://trello.com/b/DD9C8RiR/bring-the-band)


- **API's:**
  - [Spotify API](https://developer.spotify.com/web-api/)


- **Features:**
  - Anonymous User Functionality
  - Anonymous users cannot cast votes, if they try to do so, they will be prompted to login
  - If a user votes for a band, that vote is saved to a collection hosted on Kinvey.
    - Users may not vote for the same band more than once.
  - The votes page displays all bands that have been voted for so far.
  - If you are logged in and have casted votes, you will see a check mark next to each artist that you have voted for both in the search result view and on the voted page


- **Testing:**
  - Tests are in the "test" folder and use the Mocha-Chai Test Suite
  - Only custom methods on models and collections have been tested
