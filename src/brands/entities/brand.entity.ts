import { Product } from "src/products/entities/product.entity";
import { Column, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'brands'})
export class Brand {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column({unique: true})
    name: string

    @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    createAt: Date
    
    @DeleteDateColumn()
    deletedAt: Date;

    @OneToMany(() => Product, (product) => product.brand)
    products: Product[];
}
