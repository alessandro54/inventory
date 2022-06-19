import { Injectable } from '@nestjs/common';
import { NewUser } from '../dto/user/newUser.input';
import { UpdateUserInput } from '../dto/user/update-user.input';
import { PrismaService } from './prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  create(newUser: NewUser) {
    return this.prisma.user.create({
      data: newUser,
    });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany({});
  }

  async findOne(id: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: { id: id },
    });
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
