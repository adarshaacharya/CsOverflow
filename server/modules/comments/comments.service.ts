import { postsService } from '../../modules/posts/posts.service';
import { NotFound } from '../../common/exceptions';
import { Comments } from './comments.model';

interface ICommentsData {
  body: string;
  postId: number;
  userId: number;
}

class CommentsService {
  public async createOne(answersData: ICommentsData): Promise<Comments> {
    const { body, postId, userId } = answersData;

    const post = await postsService.findOneById(postId);
    if (!post) throw new NotFound(`Can't find post with id ${postId}`);

    const comment = new Comments({
      body,
      postId,
      userId,
    });
    return comment.save();
  }
}

export const commentsService = new CommentsService();
