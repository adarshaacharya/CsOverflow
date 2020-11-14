export const GET_TAG = '@@/tags/GET_TAG';
export const GET_TAGS = '@@/tags/GET_TAGS';
export const TAG_ERROR = '@@/tags/TAG_ERROR';

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
  type: typeof GET_TAG;
  payload: ITag;
}

interface GetTagsAction {
  type: typeof GET_TAGS;
  payload: ITag[];
}

interface TagErrorAction {
  type: typeof TAG_ERROR;
  payload: object;
}

export type TagsAction = GetTagAction | GetTagsAction | TagErrorAction;
