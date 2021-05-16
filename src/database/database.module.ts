import { Module, HttpService, HttpModule } from '@nestjs/common';

import { Global } from "@nestjs/common";

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
        // {
        //     provide: "TASK",
        //     useFactory: async ( http: HttpService ) => {
        //         const task = await http.get( "https://jsonplaceholder.typicode.com/todos" )
        //             .toPromise();
        //         return task.data
        //     },
        //     inject: [ HttpService ]
        // }
    ],
    exports: [ 'API_KEY' ]
} )
export class DatabaseModule { }
