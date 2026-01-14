import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';


@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {

  constructor() {
    console.log('Connecting with:', {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
    });

    const adapter = new PrismaMariaDb({
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 3306,
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'movie_api_db',
      allowPublicKeyRetrieval: true,
      ssl: { rejectUnauthorized: false },
      connectionLimit: 5, 
    });

    super({ adapter });
  }

   
  async onModuleInit() {
    await this.$connect();
    console.log('✅ Prisma connected successfully!');
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}

