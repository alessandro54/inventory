import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../src/services/prisma.service';
import { UserResolver } from '../../src/gql/resolvers/user.resolver';
import { UserService } from '../../src/services/user.service';

describe('UserResolver', () => {
  let resolver: UserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserResolver, UserService, PrismaService],
    }).compile();

    resolver = module.get<UserResolver>(UserResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
