import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';//testing

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() userData: any) {
    return await this.authService.register(userData);
  }
}