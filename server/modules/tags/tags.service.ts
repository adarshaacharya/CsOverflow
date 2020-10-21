import { Tags } from './tags.model';

class TagsService {
  public async getAll(): Promise<Tags[]> {
    const tags: Tags[] = await Tags.findAll();

    return tags;
  }
}

export const tagsService = new TagsService();
