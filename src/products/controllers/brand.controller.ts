import { Controller, Delete, Get, Post, Put, Param, Body } from '@nestjs/common';
import { BrandService } from '../services/brand.service';
import { ParseIntPipe } from '../../shared/parse-int.pipe';
import { UpdateBrandDto, CreateBrandDto } from '../dtos/brand.dto';

@Controller( 'brand' )
export class BrandController {

    constructor(
        private brandService: BrandService
    ) { }

    @Get()
    findAll () {
        return this.brandService.findAll();
    }

    @Get( ':bra_id' )
    get ( @Param( 'bra_id', ParseIntPipe ) bra_id: number ) {
        return this.brandService.findOne( bra_id );
    }

    @Post()
    create ( @Body() data: CreateBrandDto ) {
        return this.brandService.create( data );
    }

    @Put( ':bra_id' )
    update (
        @Param( 'bra_id', ParseIntPipe ) bra_id: number,
        @Body() changes: UpdateBrandDto,
    ) {
        return this.brandService.update( bra_id, changes );
    }

    @Delete( ':bra_id' )
    remove ( @Param( 'bra_id', ParseIntPipe ) bra_id: number ) {
        return this.brandService.remove( bra_id );
    }

}
