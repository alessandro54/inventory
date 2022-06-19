import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
    this.$use(async (params, next) => {
      const { action, model } = params;
      if (action === 'create' && model == 'User') {
        const hash = await bcrypt.hash(params.args.data.password, 10);
        params.args.data.password = hash;
      }
      return next(params);
    });
  }
  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
