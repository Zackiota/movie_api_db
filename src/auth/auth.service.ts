import { Injectable, UnauthorizedException} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { LoginDto } from 'src/nguoi-dung/dto/login.dto';


@Injectable()
export class AuthService {
  constructor(
            private Prisma: PrismaService, 
            private jwtService: JwtService) {}

  async login(loginDto: LoginDto) {
    const user = await this.Prisma.nguoiDung.findUnique({ where: { email: loginDto.email } });
    if (!user || !(await bcrypt.compare(loginDto.matKhau, user.matKhau))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { sub: user.maTaiKhoan, email: user.email };
    return { accessToken: this.jwtService.sign(payload) };
  }

  async validateUser(email: string, matKhau: string) {
    const user = await this.Prisma.nguoiDung.findUnique({ where: { email } });
    if (user && await bcrypt.compare(matKhau, user.matKhau)) {
      const { matKhau, ...result } = user;
      return result;
    }
    return null;
  } 
  
}
