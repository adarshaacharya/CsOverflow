import { TagsAction, TagsState, TagsActionTypes } from './tags.types';

const initialState: TagsState = {
  tags: [],
  tag: null,
  loading: true,
  error: null,
};

export const tagsReducer = (state: TagsState = initialState, action: TagsAction): TagsState => {
  switch (action.type) {
    case TagsActionTypes.GET_TAG:
      return {
        ...state,
        tag: action.payload,
        loading: false,
      };

    case TagsActionTypes.GET_TAGS:
      return {
        ...state,
        tags: action.payload,
        loading: false,
      };

    case TagsActionTypes.TAG_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
