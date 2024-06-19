import { PartialType } from '@nestjs/mapped-types';
import { RegisterUserDto } from './register_user.dto';
import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';

export class UpdateUserDto extends PartialType(RegisterUserDto) {

    id: string;

    @IsString()
    @IsNotEmpty()
    first_name: string;

    @IsString()
    @IsNotEmpty()
    last_name: string;

    @IsString()
    @IsNotEmpty()
    phone_number: string;

    @IsString()
    @IsNotEmpty()
    birth_date: string;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    username: string;

}