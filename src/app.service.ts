import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {

  constructor(
    @Inject( config.KEY ) private configService: ConfigType<typeof config>
  ) { }

  getHello () {
    const apiKey = this.configService.apiKey
    const dbName = this.configService.database.name
    const port = this.configService.database.port
    console.log( apiKey, dbName, port );
    return "hola"
  }
}
