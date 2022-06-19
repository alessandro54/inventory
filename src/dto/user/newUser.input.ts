import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class NewUser {
  @Field(() => String, { description: 'User username' })
  username: string;

  @Field(() => String, {
    description: '[Optional] User email',
    nullable: true,
  })
  email: string;

  @Field(() => String, { description: 'User password' })
  password: string;
}
