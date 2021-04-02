import { BadRequest, NotFound } from '../../common/exceptions';
import { postsService } from '../../modules/posts/posts.service';
import { Likes } from './likes.model';

interface ILikeData {
  postId: number;
  userId: number;
}

class LikesService {
  public async getLikesById(id: number) {
    const post = await postsService.findOneById(id);
    if (!post) throw new NotFound(`Can't find post with id ${id}`);

    const likes = await Likes.findOne({
      where: {
        id,
      },
    });

    return likes;
  }

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

    const like = await Likes.create({
      postId,
      userId,
    });
    return like;
  }

  public async dislikeOne(dislikeData: ILikeData): Promise<Likes> {
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

    return liked;
  }
}

export const likesService = new LikesService();
