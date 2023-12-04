import { Brand } from "src/brands/entities/brand.entity"
import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn, ManyToOne } from "typeorm"

@Entity({name: 'products'})
export class Product {

    @PrimaryGeneratedColumn()
    id: number

    @Column({unique: true})
    name: string

    @Column()
    description: string

    @Column()
    price: number

    @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    createAt: Date
    
    @DeleteDateColumn()
    deletedAt: Date;


    @ManyToOne(() => Brand, (brand) => brand.id, {
        // cascade: true,
        eager: true, // para que traiga la marca al hacer un findOne
      })
      brand: Brand;
}
