export const LIKE_POST = '@@/answers/LIKE_POST';
export const LIKE_POST_ERROR = '@@/answers/LIKE_ERROR';
export const DISLIKE_POST = '@@/answers/DISLIKE_POST';
export const DISLIKE_POST_ERROR = '@@/answers/DISLIKE_ERROR';

export interface ILike {
  id: number;
  postId: number;
  userId: number;
}

export interface LikesState {
  likes: ILike[];
}

interface LikePostAction {
  type: typeof LIKE_POST;
  payload: ILike;
}
interface DislikePostAction {
  type: typeof DISLIKE_POST;
}
interface LikePostError {
  type: typeof LIKE_POST_ERROR;
  payload: string;
}
interface DislikePostError {
  type: typeof DISLIKE_POST_ERROR;
  payload: string;
}

export type LikeActions = LikePostAction | LikePostError | DislikePostError | DislikePostAction;
