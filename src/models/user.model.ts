import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => String, { description: 'Id of the user' })
  id: string;

  @Field(() => String, { description: 'Username of the user' })
  username: string;

  @Field(() => String, {
    description: 'First name of the user',
    nullable: true,
  })
  firstName: string;

  @Field(() => String, { description: 'Email of the user', nullable: true })
  email: string;
}
