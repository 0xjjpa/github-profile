import { combineReducers } from 'redux';
import { profiles } from './profiles';

const githubDashboard = combineReducers({
  profiles
});

export default githubDashboard;
