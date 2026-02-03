import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt-auth/jwt-strategy';
import { JwtAuthGuard } from './jwt-auth/jwt-auth.guard';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [
    AuthService, 
    JwtStrategy, 
    JwtAuthGuard
  ],
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
    ConfigModule,
  ],
  exports: [
    AuthService, 
    JwtAuthGuard, 
    JwtModule
  ], 
})
export class AuthModule {}
