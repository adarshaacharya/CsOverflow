import {  Comments } from './comments.model';

interface ICommentsData {
  body: string;
  postId: number;
  userId: number;
}

class CommentsService {
  public async createOne(answersData: ICommentsData): Promise<Comments> {
    const { body, postId, userId } = answersData;

    const comment = new Comments({
      body,
      postId,
      userId,
    });
    return comment.save();
  }
}

export const commentsService = new CommentsService();
