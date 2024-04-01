import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create.user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './user.model';
import { Roles } from 'src/auth/decorators/role-auth.decorator';
import { RoleGuard } from 'src/auth/guards/role.guard';
import { AddRoleDto } from './dto/add.role.dto';
import { BanUserDto } from './dto/ban.user.dto';
import { ValidationPipe } from 'src/pipes/validation.pipe';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOperation({ summary: 'Create User' })
  @ApiResponse({ status: 201, type: User })
  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, type: [User] })
  @Roles('user')
  @UseGuards(RoleGuard)
  @Get()
  getAll() {
    return this.userService.getUsers();
  }

  @ApiOperation({ summary: `Give user roles` })
  @ApiResponse({ status: 200 })
  @Roles('Admin')
  @UseGuards(RoleGuard)
  @Post('/role')
  addRole(@Body() dto: AddRoleDto) {
    return this.userService.addRole(dto);
  }

  @ApiOperation({ summary: `Ban users` })
  @ApiResponse({ status: 200 })
  @Roles('Admin')
  @UseGuards(RoleGuard)
  @Post('/ban')
  banUsers(@Body() dto: BanUserDto) {
    return this.userService.banUser(dto);
  }
}
