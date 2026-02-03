import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../generated/client/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { DATABASE_HOST, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_PORT, DATABASE_USER } from 'src/common/constant/app.constant'; 
//import { log } from 'util';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{

constructor () {
  console.log({DATABASE_HOST})
  const adapter = new PrismaMariaDb({
  host: DATABASE_HOST,
  port: Number (DATABASE_PORT),
  user: DATABASE_USER,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  connectionLimit: 5, 
  allowPublicKeyRetrieval: true,
  //  logger: {
  //       network: (info) => {
  //       console.log('PrismaAdapterNetwork', info);
          
  //       },
  //       query: (info) => {
  //       console.log('PrismaAdapterQuery', info);
  //       },
  //       error: (error) => {
  //       console.error('PrismaAdapterError', error);
  //       },
  //       warning: (info) => {
  //       console.warn('PrismaAdapterWarning', info);
  //       },
  //     },
})

console.log({adapter});
super ({adapter},
  
)
}
 
  async onModuleInit() {
        try {
            await this.$connect();
            await this.$queryRawUnsafe<any>(`SELECT 1 + 1 AS result`);
            console.log("✅ Database connected");
        } catch (error) {
            console.error("❌ Database connection failed:", error);
        }
    }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}




