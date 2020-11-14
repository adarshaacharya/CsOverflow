import { Posts } from '../../modules/posts/posts.model';
import { NotFound } from '../../common/exceptions';
import { Tags } from './tags.model';

class TagsService {
  public async getAll(): Promise<Tags[]> {
    const tags: Tags[] = await Tags.findAll({
      include: [
        {
          model: Posts,
          as: 'posts',
          through: {
            attributes: [],
          },
        },
      ],
    });
    return tags;
  }

  public async getTag(tagname: string) {
    const tag = await Tags.findOne({
      where: { tagname },
    });
    if (!tag) throw new NotFound(`Can't find the post with id ${tagname}`);
    return tag;
  }
}

export const tagsService = new TagsService();
