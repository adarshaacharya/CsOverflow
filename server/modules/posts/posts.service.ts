import { Posts } from './posts.model';

interface IPostsData {
  body: string;
  title: string;
  userId: number;
}

class PostsService {
  public async createOne(postsData: IPostsData): Promise<Posts> {
    const { title, body, userId } = postsData;

    const post = new Posts({
      title,
      body,
      userId,
    });
    return post.save();
  }
}

export const postsService = new PostsService();
