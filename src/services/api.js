import axios from 'axios';
import { API_URL, USERS_ENDPOINT, INITIAL_ID } from '../constants/index';
import { LOAD_PROFILES } from '../constants/actions';

const api = store => next => async action => {
  next(action);
  const { type } = action;
  switch (type) {
    case LOAD_PROFILES:
      const profiles = await axios.get(
        `${API_URL}/${USERS_ENDPOINT}?since=${INITIAL_ID}`
      );
      console.log('Profiles', profiles);
      break;
    default:
      break;
  }
};

export default api;
