import { GET_TAG, GET_TAGS, TagsAction, TagsState, TAG_ERROR } from './tags.types';

const initialState: TagsState = {
  tags: [],
  tag: null,
  loading: true,
  error: null,
};

export const tagsReducer = (state: TagsState = initialState, action: TagsAction): TagsState => {
  switch (action.type) {
    case GET_TAG:
      return {
        ...state,
        tag: action.payload,
        loading: false,
      };

    case GET_TAGS:
      return {
        ...state,
        tags: action.payload,
        loading: false,
      };

    case TAG_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
