import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    // Prisma 7 strictly requires the driver adapter pattern
    const connectionString = process.env.DATABASE_URL || 'postgresql://nest_user:my_secret_password@localhost:5432/nest_db';
    const pool = new Pool({ connectionString });
    const adapter = new PrismaPg(pool);

    super({
      adapter,
      log: ['error'],
    });
  }

  async onModuleInit() {
    await this.$connect();
  }
}
