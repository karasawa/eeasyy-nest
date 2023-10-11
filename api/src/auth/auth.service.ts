import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { AuthInterface } from './interface/auth.interface';

@Injectable()
export class AuthService {
  signUp(): string {
    return 'signUp';
  }

  login(authDto: AuthDto): AuthInterface {
    return {
      email: authDto.email,
      password: authDto.password,
    };
  }
}
