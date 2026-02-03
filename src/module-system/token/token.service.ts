import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET,} from 'src/common/constant/app.constant';

@Injectable()
export class TokenService {

  async createTokens(payload: any) {
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET is not defined in environment variables');
    }

    const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '1d', // or '1h', '30m', etc.
    });

    const refreshToken = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    return { accessToken, refreshToken };
  }

  verifyAccessToken(accessToken: string, option?: jwt.VerifyOptions) {
    const decodeAccessToken = jwt.verify(
      accessToken,
      ACCESS_TOKEN_SECRET as string,
      option,
    );
    return decodeAccessToken;
  }
  verifyRefreshToken(refreshToken: string) {
    const decodeRefreshToken = jwt.verify(
      refreshToken,
      REFRESH_TOKEN_SECRET as string,
    );
    return decodeRefreshToken;
  }
}
/* 
  createTokens(userId: number) {
    const accessToken = jwt.sign(
      { userId: userId },
      ACCESS_TOKEN_SECRET as string,
      { expiresIn: '1d' },
    );

    // hạn sử dụng của refresh token
   
    const refreshToken = jwt.sign(
      { userId: userId },
      REFRESH_TOKEN_SECRET as string,
      { expiresIn: '7d' },
    );

    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  }
  verifyAccessToken(accessToken: string, option?: jwt.VerifyOptions) {
    const decodeAccessToken = jwt.verify(
      accessToken,
      ACCESS_TOKEN_SECRET as string,
      option,
    );
    return decodeAccessToken;
  }
  verifyRefreshToken(refreshToken: string) {
    const decodeRefreshToken = jwt.verify(
      refreshToken,
      REFRESH_TOKEN_SECRET as string,
    );
    return decodeRefreshToken;
  } */

