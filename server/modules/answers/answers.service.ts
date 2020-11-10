import { postsService } from '../../modules/posts/posts.service';
import { NotFound } from '../../common/exceptions';
import { Answers } from './answers.model';
import { Posts } from '../../modules/posts/posts.model';

interface IAnswersData {
  body: string;
  postId: number;
  userId: number;
}

class AnswersService {
  public async createOne(answersData: IAnswersData): Promise<Answers> {
    const { body, postId, userId } = answersData;

    const post = await postsService.findOneById(postId);
    if (!post) throw new NotFound(`Can't find post with id ${postId}`);

    const answer: Answers = new Answers({
      body,
      postId,
      userId,
    });
    return answer.save();
  }

  public async findByPostId(postId: number): Promise<Posts | null> {
    const post = await postsService.findOneById(postId);
    if (!post) throw new NotFound(`Can't find post with id ${postId}`);
    return Posts.findOne({ where: { postId } });
  }
}

export const answersService = new AnswersService();
