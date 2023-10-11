import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { AuthInterface } from './interface/auth.interface';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get()
  async signUp(): Promise<string> {
    return this.authService.signUp();
  }

  @Post()
  async login(@Body() authDto: AuthDto): Promise<AuthInterface> {
    console.log('------------');
    console.log(authDto);
    return this.authService.login(authDto);
  }
}
