import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';

@Injectable()
export class ProductsService {

    private counterId = 1
    private products: Product[] = [
        {
            id: 1,
            name: "product 1",
            description: "bla bla bla",
            price: 122,
            stock: 5,
            image: "mi imagen"
        }
    ];

    findAll () {
        return this.products
    }

    findOne ( id_prod: number ) {
        const product = this.products.find( item => item.id === id_prod )
        if ( !product ) {
            throw new NotFoundException( `Product ${id_prod} not found` )
        }
        return product
    }

    create ( data: CreateProductDto ) {

        console.log( data );
        this.counterId += 1
        const newProduct = {
            id: this.counterId,
            ...data
        }
        this.products.push( newProduct )
        return newProduct
    }

    update ( data: UpdateProductDto, id_prod: number ) {
        const product = this.products.find( item => item.id === id_prod )
        if ( product ) {
            const index = this.products.findIndex( item => item.id === id_prod )
            this.products[ index ] = { ...product, ...data }
            return this.products
        }
        return null
    }

    delete ( id_prod: number ) {
        const index = this.products.findIndex( item => item.id === id_prod )

        if ( index === -1 ) {
            throw new NotFoundException( `Product ${id_prod} not found` )
        }
        this.products.splice( index, 1 )
        return this.products
    }

}
