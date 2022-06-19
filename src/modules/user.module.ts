import { Module } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserResolver } from '../gql/resolvers/user.resolver';
import { PrismaService } from '../services/prisma.service';

@Module({
  providers: [UserResolver, UserService, PrismaService],
})
export class UserModule {}
