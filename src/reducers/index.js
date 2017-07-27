import { combineReducers } from 'redux';
import { profiles, profile } from './profiles';

const githubDashboard = combineReducers({
  profiles,
  profile
});

export default githubDashboard;
