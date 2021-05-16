import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
    ParseIntPipe,
} from '@nestjs/common';

import { CustomersService } from '../services/customers.service';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';

@Controller( 'customers' )
export class CustomerController {
    constructor( private customersService: CustomersService ) { }

    @Get()
    findAll () {
        return this.customersService.findAll();
    }

    @Get( ':cust_id' )
    get ( @Param( 'cust_id', ParseIntPipe ) cust_id: number ) {
        return this.customersService.findOne( cust_id );
    }

    @Post()
    create ( @Body() data: CreateCustomerDto ) {
        return this.customersService.create( data );
    }

    @Put( ':cust_id' )
    update (
        @Param( 'cust_id', ParseIntPipe ) cust_id: number,
        @Body() payload: UpdateCustomerDto,
    ) {
        return this.customersService.update( cust_id, payload );
    }

    @Delete( ':cust_id' )
    remove ( @Param( 'cust_id', ParseIntPipe ) cust_id: number ) {
        return this.customersService.remove( cust_id );
    }
}