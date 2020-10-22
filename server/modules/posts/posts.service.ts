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

  public async createOne(postsData: IPostsData): Promise<Posts> {
    const { title, body, userId } = postsData;

    const post = new Posts({
      title,
      body,
      userId,
    });
    return post.save();
  }

  public async findById(id: number) {
    const post = await Posts.findOne({ where: { id } });
    return post;
  }
}

export const postsService = new PostsService();
