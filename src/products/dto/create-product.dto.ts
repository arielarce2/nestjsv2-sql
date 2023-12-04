import { IsInt, IsOptional, IsPositive, IsString, MinLength } from "class-validator"

export class CreateProductDto {

    @IsString()
    @MinLength(1)
    name: string

    @IsString()
    @MinLength(1)
    description: string

    
    @IsInt()
    @IsPositive()
    price: number
    
    @IsString()
    @IsOptional()
    brand?: string;
}
