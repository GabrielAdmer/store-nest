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

import { UsersService } from '../services/users.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';

@Controller( 'users' )
export class UsersController {
    constructor( private usersService: UsersService ) { }

    @Get()
    findAll () {
        return this.usersService.findAll();
    }

    @Get( ':use_id' )
    get ( @Param( 'use_id', ParseIntPipe ) use_id: number ) {
        return this.usersService.findOne( use_id );
    }

    @Post()
    create ( @Body() data: CreateUserDto ) {
        return this.usersService.create( data );
    }

    @Put( ':use_id' )
    update (
        @Param( 'use_id', ParseIntPipe ) use_id: number,
        @Body() changes: UpdateUserDto,
    ) {
        return this.usersService.update( use_id, changes );
    }

    @Delete( ':use_id' )
    remove ( @Param( 'use_id', ParseIntPipe ) use_id: number ) {
        return this.usersService.remove( use_id );
    }
}