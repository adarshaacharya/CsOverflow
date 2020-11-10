import { Users } from '../../modules/users/users.model';
import { NotFound } from '../../common/exceptions';
import { postsService } from '../../modules/posts/posts.service';
import { Answers } from './answers.model';

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

  public async findByPostId(postId: number): Promise<Answers[] | null> {
    const post = await postsService.findOneById(postId);
    if (!post) throw new NotFound(`Can't find post with id ${postId}`);
    return Answers.findAll({
      where: { postId },
      order: [['id', 'ASC']],
      include: [
        {
          model: Users,
          as: 'user',
          attributes: ['id', 'name', 'email', 'avatar'],
        },
      ],
    });
  }
}

export const answersService = new AnswersService();
