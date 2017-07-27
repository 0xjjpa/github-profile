import axios from 'axios';
import { API_URL, USERS_ENDPOINT, INITIAL_ID } from '../constants/index';
import { LOAD_PROFILES, PROFILES_LOADED } from '../constants/actions';

const api = store => next => async action => {
  next(action);
  const { type } = action;
  switch (type) {
    case LOAD_PROFILES:
      const loadedProfiles = await axios.get(
        `${API_URL}/${USERS_ENDPOINT}?since=${INITIAL_ID}&per_page=12`
      );
      next({
        type: PROFILES_LOADED,
        loadedProfiles
      });
      break;
    default:
      break;
  }
};

export default api;
