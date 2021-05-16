import { Module, HttpService, HttpModule } from '@nestjs/common';
import { Client } from 'pg';
import { Global } from "@nestjs/common";

import config from 'src/config';
import { ConfigType } from '@nestjs/config';

const API_KEY = '123456';
const API_KEY_PROD = "DEPRODUCCION"





@Global()
@Module( {
    imports: [ HttpModule ],
    providers: [
        {
            provide: "API_KEY",
            useValue: process.env.NODE_ENV === "prod" ? API_KEY_PROD : API_KEY
        },
        {
            provide: "PG",
            useFactory: ( configService: ConfigType<typeof config> ) => {
                const { user, host, dbName, password, port } = configService.postgres
                const client = new Client( {
                    user,
                    host,
                    database: dbName,
                    password,
                    port,
                } );
                client.connect()
                return client
            },
            inject: [ config.KEY ]
        },

    ],
    exports: [ 'API_KEY', 'PG' ]
} )
export class DatabaseModule { }
