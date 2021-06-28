export enum TagsActionTypes {
  GET_TAG = '@@/tags/GET_TAG',
  GET_TAGS = '@@/tags/GET_TAGS',
  TAG_ERROR = '@@/tags/TAG_ERROR',
}

interface IPost {
  id: number;
  title: string;
  body: string;
}

export interface ITag {
  id: number;
  tagname: string;
  createdAt: string;
  posts: IPost[];
}

export interface TagsState {
  tags: ITag[];
  tag: ITag | null;
  loading: boolean;
  error: {} | null;
}

interface GetTagAction {
  type: TagsActionTypes.GET_TAG;
  payload: ITag;
}

interface GetTagsAction {
  type: TagsActionTypes.GET_TAGS;
  payload: ITag[];
}

interface TagErrorAction {
  type: TagsActionTypes.TAG_ERROR;
  payload: object;
}

export type TagsAction = GetTagAction | GetTagsAction | TagErrorAction;
