import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AUTH_SERVICE, envs } from 'src/config';

@Module({
  controllers: [AuthController],
  imports: [
    ClientsModule.register([
      {
        name: AUTH_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.authMicroserviceHost,
          port: envs.authMicroservicePort,
        }
      },
    ]),
  ]
})
export class AuthModule {}
