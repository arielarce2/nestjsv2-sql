import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandsModule } from './brands/brands.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3307,
      username: "user_crud",
      password: "root",
      database: "db_crud",
      autoLoadEntities: true,
      synchronize: true,
    }),
    BrandsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
