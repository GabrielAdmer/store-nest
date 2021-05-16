import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { CustomerController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';

@Module( {
  controllers: [ UsersController, CustomerController ],
  providers: [ CustomersService, UsersService ]
} )
export class UsersModule { }
