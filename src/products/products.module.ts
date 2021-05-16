import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products.controller';
import { BrandController } from './controllers/brand.controller';
import { ProductsService } from './services/products.service';
import { BrandService } from './services/brand.service';
import { CategoriesController } from './controllers/categories.controller';
import { CategoriesService } from './services/categories.service';

@Module( {
  controllers: [ ProductsController, BrandController, CategoriesController, ],
  providers: [ ProductsService, BrandService, CategoriesService ],
  exports: [ ProductsService ]
} )
export class ProductsModule { }
