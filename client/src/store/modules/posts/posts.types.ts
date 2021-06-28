export enum PostsActionTypes {
  GET_POSTS = '@@/posts/GET_POSTS',
  GET_POST = '@@/posts/GET_POST',
  GET_TOP_POSTS = '@@/posts/GET_TOP_POSTS',
  GET_TAG_POSTS = '@@/posts/GET_TAG_POSTS',
  POST_ERROR = '@@/posts/POST_ERROR',
  ADD_POST = '@@/posts/ADD_POST',
  UPDATE_POST = '@@/posts/UPDATE_POST',
  DELETE_POST = '@@/posts/DELETE_POST',
  LIKE_POST = '@@/posts/LIKE_POST',
  DISLIKE_POST = '@@/posts/DISLIKE_POST',
}

export interface IPostTag {
  id: number;
  tagname: string;
}

export interface IPostUser {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

export interface IPostLikes {
  id: number;
  postId: number;
  userId: number;
}

export interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
  likes: IPostLikes[];
  tags: IPostTag[];
  user: IPostUser;
}

export interface ITagPosts {
  id: number;
  tagname: string;
  createdAt: string;
  posts: IPost[];
}

export interface PostsState {
  posts: IPost[];
  post: IPost | null;
  loading: boolean;
  error: {} | null;
}

export interface IPostCreate {
  title: string;
  body: string;
  tags: string;
}

export interface IPostEdit {
  title: string;
  body: string;
  tags: string;
}
interface GetPostsAction {
  type: PostsActionTypes.GET_POSTS;
  payload: IPost[];
}

interface GetTopPostsAction {
  type: PostsActionTypes.GET_TOP_POSTS;
  payload: IPost[];
}

interface GetTagPostsAction {
  type: PostsActionTypes.GET_TAG_POSTS;
  payload: IPost[];
}

interface GetPostAction {
  type: PostsActionTypes.GET_POST;
  payload: IPost;
}

interface AddPostAction {
  type: PostsActionTypes.ADD_POST;
  payload: IPost;
}

interface UpdatePostAction {
  type: PostsActionTypes.UPDATE_POST;
  payload: IPost;
}

interface DeletePostAction {
  type: PostsActionTypes.DELETE_POST;
  payload: string;
}

interface LikePostAction {
  type: PostsActionTypes.LIKE_POST;
  payload: IPostLikes;
}
interface DislikePostAction {
  type: PostsActionTypes.DISLIKE_POST;
  payload: IPostLikes;
}

interface PostErrorAction {
  type: PostsActionTypes.POST_ERROR;
  payload: object;
}

export type PostsActions =
  | GetPostsAction
  | GetTopPostsAction
  | GetTagPostsAction
  | GetPostAction
  | AddPostAction
  | UpdatePostAction
  | DeletePostAction
  | LikePostAction
  | DislikePostAction
  | PostErrorAction;
