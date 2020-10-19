import { Response } from 'express';
import { Answers } from './answers.model';

class AnswersController {
  public async createOne(req, res: Response): Promise<void> {
    try {
      const { body } = req.body;

      const answer: Answers = new Answers({
        body,
        postId: +req.params.postId,
        userId: req.user.id,
      });
      await answer.save();

      res.json(answer);
    } catch (error) {
      console.log(error.message);
      res.status(500).json('Server error');
    }
  }
}

export const answersController = new AnswersController();
