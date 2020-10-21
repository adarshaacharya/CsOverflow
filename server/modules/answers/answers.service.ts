import { NotFound } from '../../common/exceptions';
import { Posts } from '../../modules/posts/posts.model';
import { Answers } from './answers.model';

interface IAnswersData {
  body: string;
  postId: number;
  userId: number;
}

class AnswersService {
  public async createOne(answersData: IAnswersData): Promise<Answers> {
    const { body, postId, userId } = answersData;

    const post = await Posts.findByPk(postId);
    if (!post) throw new NotFound(`Can't find post with id ${postId}`);

    const answer: Answers = new Answers({
      body,
      postId,
      userId,
    });
    return answer.save();
  }
}

export const answersService = new AnswersService();
