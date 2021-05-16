import { PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsUrl } from "class-validator";
import { CreateProductDto } from './products.dto';

export class CreateBrandDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsUrl()
    @IsNotEmpty()
    readonly image: string;
}

export class UpdateBrandDto extends PartialType( CreateProductDto ) { }