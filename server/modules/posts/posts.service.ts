import { BadRequest, NotFound, Unauthorized } from '../../common/exceptions';
import { Likes } from '../../modules/likes/likes.model';
import { Tags } from '../../modules/tags/tags.model';
import { Users } from '../../modules/users/users.model';
import { Posts } from './posts.model';

interface ICreatePostData {
  body: string;
  title: string;
  userId: number;
  tags: string[];
}

interface IPosts {
  body: string;
  title: string;
  tags: string[];
}

const NO_RIGHTS = 'You do not have rights to do this.';

class PostsService {
  public async findAll(): Promise<Posts[]> {
    const posts = await Posts.findAll({
      order: [['id', 'DESC']],
      include: [
        {
          model: Tags,
          as: 'tags',
          attributes: ['id', 'tagname'],
          through: {
            attributes: [],
          },
        },
        {
          model: Users,
          as: 'user',
          attributes: ['id', 'name', 'email', 'avatar'],
        },
        {
          model: Likes,
          as: 'likes',
          attributes: ['id', 'userId', 'postId'],
        },
      ],
    });
    return posts;
  }
  public async findTopPosts(): Promise<Posts[]> {
    const posts = await Posts.findAll({
      limit: 5,
      order: [['id', 'DESC']],
      include: [
        {
          model: Tags,
          as: 'tags',
          attributes: ['id', 'tagname'],
          through: {
            attributes: [],
          },
        },
        {
          model: Users,
          as: 'user',
          attributes: ['id', 'name', 'email', 'avatar'],
        },
        {
          model: Likes,
          as: 'likes',
          attributes: ['id', 'userId', 'postId'],
        },
      ],
    });
    return posts;
  }

  public async findOneByIdOrThrow(id: number): Promise<Posts | null> {
    const post = this.findOneById(id);
    if (!post) throw new BadRequest(`Post with id ${id} not found`);
    return post;
  }

  public async findByTag(tagname: string) {
    const tag = await Tags.findOne({ where: { tagname } });

    if (!tag) throw new NotFound('Tag not found');

    const post = await Tags.findOne({
      where: { tagname },
      include: [
        {
          model: Posts,
          as: 'posts',
          through: {
            attributes: [],
          },
          include: [
            {
              model: Users,
              as: 'user',
              attributes: ['id', 'name', 'email', 'avatar'],
            },
          ],
        },
      ],
    });

    return post;
  }

  public async createOne(postsData: ICreatePostData): Promise<Posts> {
    const { title, body, userId, tags } = postsData;

    const post = await Posts.create({
      title,
      body,
      userId,
    });

    // map array & check if tag is already present if not add one
    tags.forEach(async el => {
      let tag = await Tags.findOne({ where: { tagname: el } });
      if (!tag) tag = await Tags.create({ tagname: el });
      await post.setTags(tag, { through: { postId: post.id, tagId: tag.id } });
    });

    return post;
  }

  public async updateOne(id: number, updates: IPosts, userId: number) {
    const post = await this.findOneById(id);
    if (!post) throw new NotFound(`Can't find the post with id ${id}`);

    if (post.userId !== userId) {
      throw new Unauthorized(NO_RIGHTS);
    }

    const [, [updatedPost]] = await Posts.update(updates, {
      where: { id },
      returning: true,
    });

    updates.tags.forEach(async el => {
      let tag = await Tags.findOne({ where: { tagname: el } });
      if (!tag) tag = await Tags.create({ tagname: el });
      await post.setTags(tag, { through: { postId: post.id, tagId: tag.id } });
    });
    return updatedPost;
  }

  public async deleteOne(postId: number, userId: number) {
    const post = await this.findOneById(postId);
    if (!post) throw new NotFound(`Can't find the post with id ${postId}`);

    // check whether logged in user is the one who create the post to be deleted
    if (post.userId !== userId) {
      throw new Unauthorized(NO_RIGHTS);
    }

    await Posts.destroy({ where: { id: postId } });
  }

  public async findOneById(id: number) {
    const post = await Posts.findOne({
      where: { id },
      include: [
        {
          model: Tags,
          as: 'tags',
          attributes: ['id', 'tagname'],
          through: {
            attributes: [],
          },
        },
        {
          model: Users,
          as: 'user',
          attributes: ['id', 'name', 'email', 'avatar'],
        },
        {
          model: Likes,
          as: 'likes',
          attributes: ['id', 'userId', 'postId'],
        },
      ],
    });
    return post;
  }
}

export const postsService = new PostsService();
