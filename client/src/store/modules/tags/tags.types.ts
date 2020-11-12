import { GET_POST, GET_POSTS } from '../posts/posts.types';

export const GET_TAG = '@@/tags/GET_TAG';
export const GET_TAGS = '@@/tags/GET_TAGS';
export const TAG_ERROR = '@@/tags/TAG_ERROR';

export interface ITag {
  id: number;
  tagname: string;
}

export interface TagsState {
  tags: ITag[];
  tag: null;
  loading: true;
  error: {} | null;
}

interface GetTagAction {
  type: typeof GET_POST;
  payload: ITag;
}

interface GetPostsAction {
  type: typeof GET_POSTS;
  payload: ITag[];
}

interface TagErrorAction {
  type: typeof TAG_ERROR;
  payload: object;
}

export type TagsAction = GetTagAction | GetPostsAction | TagErrorAction;
