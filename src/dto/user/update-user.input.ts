import { NewUser } from './newUser.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(NewUser) {
  @Field(() => Int)
  id: number;
}
