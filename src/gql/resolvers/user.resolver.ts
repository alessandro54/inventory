import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { NewUser } from '../../dto/user/newUser.input';
import { UpdateUserInput } from '../../dto/user/update-user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  // ! CREATE
  @Mutation(() => User)
  createUser(@Args('user') newUserInput: NewUser) {
    return this.userService.create(newUserInput);
  }

  // ! READ
  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'user', nullable: true })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.remove(id);
  }
}
