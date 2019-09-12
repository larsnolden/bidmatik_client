import { SET_PAGE_CONTEXT, SET_ACTIVE_PROFILE } from './actionTypes';

const initialState = {
  activeProfileId: null,
  pageName: 'Loading',
  pageIsLoading: true
};

export default (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case SET_PAGE_CONTEXT:
      return {
        ...state,
        pageName: action.value.pageName,
        pageIsLoading: action.value.isLoading
      };
    case SET_ACTIVE_PROFILE:
      return {
        ...state,
        activeProfileId: action.value
      };
    default:
      return state;
  }
};
