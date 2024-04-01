import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ example: '12345678', description: `user's ID` })
  readonly userId: number;

  @ApiProperty({ example: 'title', description: `post's title` })
  @IsString({ message: 'Must be string' })
  @Length(2, 30, { message: 'Login must be min 2 and max 30 characters' })
  readonly title: string;

  @ApiProperty({ example: 'user@email.com', description: `post's content` })
  @IsString({ message: 'Must be string' })
  @Length(2, 1000, { message: 'content must be min 2 and max 1000 characters' })
  readonly content: string;
}
