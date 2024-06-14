import { AUTH_SERVICE } from 'src/config';
import { Body, Controller, Get, HttpCode, Inject, Post } from '@nestjs/common';
import { catchError } from 'rxjs';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { LoginUserDto, RegisterUserDto, VerifyUserDto } from './dto';

@Controller('')
export class AuthController {

  constructor(
    @Inject(AUTH_SERVICE) private readonly client: ClientProxy,
  ) { }

  @HttpCode(201)
  @Post('register')
  registerUser(@Body() registerUserDto: RegisterUserDto) {
    return this.client.send('auth.register.user', registerUserDto).pipe(
      catchError(error => {
        throw new RpcException(error);
      })
    )
  }

  @HttpCode(200)
  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.client.send('auth.login.user', loginUserDto).pipe(
      catchError(error => {
        throw new RpcException(error);
      })
    )
  }

  @HttpCode(200)
  @Get('verify-user')
  verifyUser(@Body() verifyUserDto: VerifyUserDto) {
    return this.client.send('auth.verify.user', verifyUserDto).pipe(
      catchError(error => {
        throw new RpcException(error);
      })
    )
  }

}
