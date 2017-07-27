import {
  PROFILES_LOADED,
  PROFILE_LOADED,
  EMPTY_PROFILE
} from '../constants/actions';

export const profile = (state = null, action) => {
  const { type, loadedProfile } = action;
  switch (type) {
    case PROFILE_LOADED:
      return loadedProfile.data;
    case EMPTY_PROFILE:
      return null;
    default:
      return state;
  }
};

export const profiles = (state = [], action) => {
  const { type, loadedProfiles } = action;
  switch (type) {
    case PROFILES_LOADED:
      return loadedProfiles.data;
    default:
      return state;
  }
};
