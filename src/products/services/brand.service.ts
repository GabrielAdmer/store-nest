import { Injectable, NotFoundException } from '@nestjs/common';
import { Brand } from '../entities/brand.entity';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brand.dto';

@Injectable()
export class BrandService {
    private counterId = 1;
    private brands: Brand[] = [
        {
            id: 1,
            name: 'Brand 1',
            image: 'https://i.imgur.com/U4iGx1j.jpeg',
        },
    ];

    findAll () {
        return this.brands
    }

    findOne ( bra_id: number ) {
        const brand = this.brands.find( item => item.id === bra_id )
        if ( !brand ) {
            throw new NotFoundException( `brand ${bra_id} is not found` )
        }
        return brand
    }

    create ( data: CreateBrandDto ) {
        this.counterId += 1
        const newBrand = {
            id: this.counterId,
            ...data
        }
        this.brands.push( newBrand )
        return newBrand
    }

    update ( bra_id: number, changes: UpdateBrandDto ) {
        const brand = this.brands.find( item => item.id === bra_id )
        const index = this.brands.findIndex( item => item.id === bra_id )
        this.brands[ index ] = {
            ...brand, ...changes
        }
        return brand
    }

    remove ( bra_id: number ) {
        const index = this.brands.findIndex( ( item ) => item.id === bra_id );
        if ( index === -1 ) {
            throw new NotFoundException( `Brand #${bra_id} not found` );
        }
        this.brands.splice( index, 1 );
        return true;
    }

}
