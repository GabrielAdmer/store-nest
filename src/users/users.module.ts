import { Module } from '@nestjs/common';

import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { CustomerController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';

import { ProductsModule } from '../products/products.module';

@Module( {
  controllers: [ UsersController, CustomerController ],
  providers: [ CustomersService, UsersService ],
  imports: [ ProductsModule ]
} )
export class UsersModule { }
