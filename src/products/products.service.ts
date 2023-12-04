import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Brand } from 'src/brands/entities/brand.entity';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,

    @InjectRepository(Brand)
    private brandsRepository: Repository<Brand>,

  ) {}

  

  async create(createProductDto: CreateProductDto) {
    const brand = await this.brandsRepository.findOneBy({
      name: createProductDto.brand,
    });

    if (!brand) {
      throw new BadRequestException('Brand not found');
    }

    const product = this.productsRepository.create({
      name: createProductDto.name,
      description: createProductDto.description,
      price: createProductDto.price,
      brand,
    });

    return await this.productsRepository.save(product);
  }




  async findAll() {
    return await this.productsRepository.find();
  }

  async findOne(id: number) {
    return await this.productsRepository.findOneBy({ id });
  }




  async update(id: number, UpdateProductDto: UpdateProductDto) {
    const product = await this.productsRepository.findOneBy({ id });
  
    if (!product) {
      throw new BadRequestException('Product not found');
    }
  
    let brand;
    if (UpdateProductDto.brand) {
      brand = await this.brandsRepository.findOneBy({
        name: UpdateProductDto.brand,
      });
  
      if (!brand) {
        throw new BadRequestException('Brand not found');
      }
    }
  
    return await this.productsRepository.save({
      ...product,
      ...UpdateProductDto,
      brand,
    });
  }








  async remove(id: number) {
    return await this.productsRepository.softDelete(id);
  }
}
