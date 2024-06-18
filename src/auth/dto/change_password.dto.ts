import { IsNotEmpty, IsString, IsStrongPassword } from "class-validator";
import { Match } from "src/common";

export class ChangePasswordDto {

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    @IsStrongPassword()
    newPassword: string;

    @IsString()
    @IsNotEmpty()
    @Match('newPassword', { message: 'New passwords do not match' })
    repeatNewPassword: string;

}