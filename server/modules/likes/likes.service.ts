import { BadRequest, NotFound } from '../../common/exceptions';
import { postsService } from '../../modules/posts/posts.service';
import { Likes } from './likes.model';

interface ILikeData {
  postId: number;
  userId: number;
}

class LikesService {
  public async likeOne(likeData: ILikeData): Promise<Likes> {
    const { postId, userId } = likeData;

    const post = await postsService.findOneById(postId);
    if (!post) throw new NotFound(`Can't find post with id ${postId}`);

    const liked = await Likes.findOne({
      where: {
        postId,
        userId,
      },
    });

    if (liked) throw new BadRequest('Post already liked, please refresh');

    const like = new Likes({
      postId,
      userId,
    });
    return like.save();
  }

  public async dislikeOne(dislikeData: ILikeData): Promise<void> {
    const { postId, userId } = dislikeData;

    const post = await postsService.findOneById(postId);
    if (!post) throw new NotFound(`Can't find post with id ${postId}`);

    const liked = await Likes.findOne({
      where: {
        postId,
        userId,
      },
    });

    if (!liked) throw new BadRequest("Post isn't liked, please refresh.");

    await Likes.destroy({
      where: {
        postId,
        userId,
      },
    });
  }
}

export const likesService = new LikesService();
