import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor( private readonly appService: AppService ) { }

  @Get()
  getHello (): string {
    return this.appService.getHello();
  }

  @Get( 'task' )
  getTask (): string {
    return `esto es un arreglo`
  }

  @Get( 'slash' )
  getTaskSlash (): string {
    return `biene con slash ${12 * 12}`
  }

  @Get( 'categories/:idCat/products/:idPro' )
  getCategoriaProducto (
    @Param( 'idCat', ParseIntPipe ) idCat: number,
    @Param( 'idPro', ParseIntPipe ) idPro: number
  ): string {

    return `el id del producto es ${idPro} y de la categorias es ${idCat}`

  }

  @Get( 'filter' )
  getProductList (
    @Query( 'limit', ParseIntPipe ) limit: number,
    @Query( 'offset', ParseIntPipe ) offset: number,
    @Query( 'brand' ) brand: string

  ): string {
    console.log( typeof limit, typeof offset );
    return `El limite es ${limit} y el offset ${offset} y el brand es ${brand} `
  }
}
