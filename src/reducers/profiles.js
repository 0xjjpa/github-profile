import { PROFILES_LOADED, PROFILE_LOADED } from '../constants/actions';

export const profile = (state = null, action) => {
  const { type, loadedProfile } = action;
  switch (type) {
    case PROFILE_LOADED:
      return loadedProfile.data;
    default:
      return state;
  }
};

export const profiles = (state = [1, 2, 3, 4, 5, 6], action) => {
  const { type, loadedProfiles } = action;
  switch (type) {
    case PROFILES_LOADED:
      return loadedProfiles.data;
    default:
      return state;
  }
};
