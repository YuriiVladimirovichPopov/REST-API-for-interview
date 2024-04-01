import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from './dto/roles.model';
import { User } from 'src/users/user.model';
import { UserRoles } from './dto/user-roles.model';

@Module({
  imports: [SequelizeModule.forFeature([Role, User, UserRoles])],
  providers: [RolesService],
  controllers: [RolesController],
  exports: [RolesService],
})
export class RolesModule {}
