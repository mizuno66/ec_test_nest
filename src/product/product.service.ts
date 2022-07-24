import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepostiory: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return await this.productRepostiory.find();
  }

  async create(product: Product) {
    return await this.productRepostiory.insert(product);
  }
}
