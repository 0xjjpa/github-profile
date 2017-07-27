import { PROFILES_LOADED } from '../constants/actions';

export const profiles = (state = [1, 2, 3, 4, 5, 6], action) => {
  const { type, loadedProfiles } = action;
  switch (type) {
    case PROFILES_LOADED:
      return loadedProfiles.data;
    default:
      return state;
  }
};
