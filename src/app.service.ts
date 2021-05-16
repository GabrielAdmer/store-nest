import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Client } from 'pg';

import config from './config';


@Injectable()
export class AppService {

  constructor(
    @Inject( config.KEY ) private configService: ConfigType<typeof config>,
    @Inject( 'PG' ) private clientePg: Client
  ) { }

  getHello () {
    const apiKey = this.configService.apiKey
    const dbName = this.configService.database.name
    const port = this.configService.database.port
    console.log( apiKey, dbName, port );
    return "hola"
  }

  getTask () {
    return new Promise( ( resolve, reject ) => {
      this.clientePg.query( 'SELECT * FROM tasks', ( err, res ) => {
        if ( err ) {
          reject( err )
        }
        resolve( res.rows )
      } )
    } )

  }
}
