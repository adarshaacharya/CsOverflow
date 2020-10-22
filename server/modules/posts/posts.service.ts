import { BadRequest, NotFound, Unauthorized } from '../../common/exceptions';
import { Posts } from './posts.model';

interface IPostsData {
  body: string;
  title: string;
  userId: number;
}
const NO_RIGHTS = 'You do not have rights to do this.';

class PostsService {
  public async findAll(): Promise<Posts[]> {
    const posts = await Posts.findAll({
      order: [['id', 'DESC']],
    });
    return posts;
  }

  public async findOneByIdOrThrow(id: number): Promise<Posts | null> {
    const post = this.findOneById(id);
    if (!post) throw new BadRequest(`Post with id ${id} not found`);
    return post;
  }

  public async createOne(postsData: IPostsData): Promise<Posts> {
    const { title, body, userId } = postsData;

    const post = new Posts({
      title,
      body,
      userId,
    });
    return post.save();
  }

  public async deleteOne(postId: number, userId: number) {
    const post = await this.findOneById(postId);
    if (!post) throw new NotFound(`Can't find the post with id ${postId}`);

    console.log(typeof post.userId, typeof userId);
    // check whether logged in user is the one who create the post to be deleted
    if (post.userId !== userId) {
      throw new Unauthorized(NO_RIGHTS);
    }

    await Posts.destroy({ where: { id: postId } });
  }

  public async findOneById(id: number) {
    const post = await Posts.findOne({ where: { id } });
    return post;
  }
}

export const postsService = new PostsService();
