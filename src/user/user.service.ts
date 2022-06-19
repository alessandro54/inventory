import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from '../services/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany({});
  }

  findOne(id: number) {
    return this.prisma.user.findMany({});
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
