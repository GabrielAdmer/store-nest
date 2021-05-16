import { Injectable, NotFoundException } from '@nestjs/common';

import { Customer } from '../entities/customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';

@Injectable()
export class CustomersService {
    private counterId = 1;
    private customers: Customer[] = [
        {
            id: 1,
            name: 'Nicolas',
            lastName: 'Molina',
            phone: '3111111212',
        },
    ];

    findAll () {
        return this.customers;
    }

    findOne ( cust_id: number ) {
        const customer = this.customers.find( ( item ) => item.id === cust_id );
        if ( !customer ) {
            throw new NotFoundException( `Customer #${cust_id} not found` );
        }
        return customer;
    }

    create ( data: CreateCustomerDto ) {
        this.counterId = this.counterId + 1;
        const newCustomer = {
            id: this.counterId,
            ...data,
        };
        this.customers.push( newCustomer );
        return newCustomer;
    }

    update ( cust_id: number, changes: UpdateCustomerDto ) {
        const customer = this.findOne( cust_id );
        const index = this.customers.findIndex( ( item ) => item.id === cust_id );
        this.customers[ index ] = {
            ...customer,
            ...changes,
        };
        return this.customers[ index ];
    }

    remove ( cust_id: number ) {
        const index = this.customers.findIndex( ( item ) => item.id === cust_id );
        if ( index === -1 ) {
            throw new NotFoundException( `Customer #${cust_id} not found` );
        }
        this.customers.splice( index, 1 );
        return true;
    }
}