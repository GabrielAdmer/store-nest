import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  constructor(
    @Inject( 'API_KEY' ) private apiKey: string,
    @Inject( "TASK" ) private task: any
  ) { }

  getHello (): string {
    console.log( this.task );
    return `Este es mi vlaor api key ${this.apiKey}`;
  }
}
