import { SET_ACTIVE_PROFILE, SET_PAGE_CONTEXT } from './actionTypes';

export const setActiveProfileId = activeProfileId => ({
  type: SET_ACTIVE_PROFILE,
  value: activeProfileId
});

export const setPageContext = ({ pageName, isLoading }) => {
  console.log(pageName, isLoading);
  return {
    type: SET_PAGE_CONTEXT,
    value: {
      pageName,
      isLoading
    }
  };
};
