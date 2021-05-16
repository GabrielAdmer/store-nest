import {
    Controller, Get, Param, Query, ParseIntPipe, Body,
    Post, Put, Delete
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ProductsService } from '../services/products.service';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';

@ApiTags( 'products' )
@Controller( 'products' )
export class ProductsController {

    constructor(
        private productsService: ProductsService
    ) { }

    @Get()
    findAll (
        @Query( 'limit' ) limit = 10,
        @Query( 'offset' ) offset = 0,
        @Query( 'brand' ) brand: string
    ) {
        return this.productsService.findAll()
    }

    @Get( ':pro_id' )
    findOne (
        @Param( 'pro_id', ParseIntPipe ) pro_id: number
    ) {
        return this.productsService.findOne( pro_id )
    }

    @Post()
    create ( @Body() data: CreateProductDto ) {
        return this.productsService.create( data )
    }

    @Put( ':pro_id' )
    update (
        @Body() data: UpdateProductDto,
        @Param( 'pro_id', ParseIntPipe ) pro_id: number
    ) {
        return this.productsService.update( data, pro_id )
    }

    @Delete( ':pro_id' )
    delete (
        @Param( 'pro_id', ParseIntPipe ) pro_id: number
    ) {
        return this.productsService.delete( pro_id )
    }
}
