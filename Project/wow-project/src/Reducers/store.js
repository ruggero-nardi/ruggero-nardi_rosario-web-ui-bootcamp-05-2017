import { combineReducers } from 'redux';
import { regionReducer } from './regionReducer';
import { realmReducer } from './realmReducer';
import { pvpLeaderboardReducer } from './pvpLeaderboardReducer';
import { challengeLeaderboardReducer } from './challengeLeaderboardReducer';
import { selectedChallenge } from './selectedChallenge';
import { createStore } from 'redux';

const reducer = combineReducers({
  region: regionReducer,
  realm: realmReducer,
  leaderboard: pvpLeaderboardReducer,
  challenge: challengeLeaderboardReducer,
  selectedChallenge: selectedChallenge
});


const store = createStore(reducer);

export default store;