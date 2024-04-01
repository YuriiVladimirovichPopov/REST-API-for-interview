import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'login', description: `user's login` })
  @IsString({ message: 'Must be string' })
  @Length(2, 13, { message: 'Login must be min 2 and max 13 characters' })
  readonly login: string;

  @ApiProperty({ example: 'user@email.com', description: `user's email` })
  @IsString({ message: 'Must be string' })
  @IsEmail()
  readonly email: string;

  @ApiProperty({ example: '12345678', description: `user's password` })
  @IsString({ message: 'Password must be string' })
  @Length(4, 13, { message: 'Password must be min 4 and max 13 characters' })
  readonly password: string;
}
