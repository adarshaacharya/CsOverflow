import { Answers } from './answers.model';

interface IAnswersData {
  body: string;
  postId: number;
  userId: number;
}

class AnswersService {
  public async createOne(answersData: IAnswersData): Promise<Answers> {
    const { body, postId, userId } = answersData;

    const answer: Answers = new Answers({
      body,
      postId,
      userId,
    });
    return answer.save();
  }
}

export const answersService = new AnswersService();
