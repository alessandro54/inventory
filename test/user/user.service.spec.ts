import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../../src/services/user.service';
import { PrismaService } from '../../src/services/prisma.service';
import { NewUser } from '../../src/dto/user/newUser.input';

describe('UserService', () => {
  let service: UserService;
  let prisma: any;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, PrismaService],
    }).compile();

    service = module.get<UserService>(UserService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  describe('findAll', () => {
    it('should return a list of users', async () => {
      prisma.user.findMany = jest
        .fn(prisma.user.findMany())
        .mockReturnValueOnce([
          { username: 'user1', email: 'user' },
          { username: 'user2', email: 'user2' },
        ]);
      const users = await service.findAll();
      expect(users.length).toBe(2);
    });
  });

  describe('create', () => {
    it('should create a new user', async () => {
      prisma.user.create = jest
        .fn(prisma.user.create())
        .mockReturnValueOnce({ username: 'user1', email: 'user' });
      const user = await service.create(new NewUser());
      console.log(user);
      expect(user.username).toBe('user1');
    });
  });
});
