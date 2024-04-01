import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create.post.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './post.model';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post) private postRepository: typeof Post,
    private filesService: FilesService,
  ) {}
  async createPost(postDto: CreatePostDto, image: any) {
    const fileName = await this.filesService.createFile(image);
    const post = await this.postRepository.create({
      ...postDto,
      image: fileName,
    });
    return post;
  }
}
