import { BadRequest, NotFound } from '../../common/exceptions';
import { Posts } from './posts.model';

interface IPostsData {
  body: string;
  title: string;
  userId: number;
}

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

  public async findOneById(id: number) {
    const post = await Posts.findOne({ where: { id } });
    return post;
  }
}

export const postsService = new PostsService();
