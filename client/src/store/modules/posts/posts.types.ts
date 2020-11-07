export const GET_POSTS = '@@/posts/GET_POSTS';
export const GET_POST = '@@/posts/GET_POST';
export const GET_TOP_POSTS = '@@/posts/GET_TOP_POSTS';
export const GET_TAG_POSTS = '@@/posts/GET_TAG_POSTS';
export const POST_ERROR = '@@/posts/POST_ERROR';
export const ADD_POST = '@@/posts/ADD_POST';
export const DELETE_POST = '@@/posts/DELETE_POST';

export interface ITag {
  id: number;
  tagname: string;
}

export interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
  tags: ITag[];
}

export interface PostsState {
  posts: IPost[];
  post: IPost | null;
  loading: boolean;
  error: {};
}

interface GetPostsAction {
  type: typeof GET_POSTS;
  payload: IPost[];
}

interface GetPostAction {
  type: typeof GET_POST;
  payload: IPost;
}

export type PostsAction = GetPostsAction | GetPostAction;
