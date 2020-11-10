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

export interface IPostUser {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

export interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
  tags: ITag[];
  user: IPostUser;
}

export interface PostsState {
  posts: IPost[];
  post: IPost | null;
  loading: boolean;
  error: {} | null;
}

interface GetPostsAction {
  type: typeof GET_POSTS;
  payload: IPost[];
}

interface GetPostAction {
  type: typeof GET_POST;
  payload: IPost;
}

interface AddPostAction {
  type: typeof ADD_POST;
  payload: IPost;
}

interface DeletePostAction {
  type: typeof DELETE_POST;
  payload: number;
}

interface PostErrorAction {
  type: typeof POST_ERROR;
  payload: string;
}

export type PostsActions = GetPostsAction | GetPostAction | AddPostAction | DeletePostAction | PostErrorAction;
