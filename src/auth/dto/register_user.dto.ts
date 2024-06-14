import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class RegisterUserDto {

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

    @IsString()
    @IsNotEmpty()
    @IsStrongPassword()
    password: string;

}