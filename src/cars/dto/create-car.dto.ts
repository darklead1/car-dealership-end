import { IsString } from "class-validator";


export class CreateCarDto {
    @IsString({ message: `la marca debe ser String` })
    readonly brand: string;
    @IsString()
    readonly model: string;


}