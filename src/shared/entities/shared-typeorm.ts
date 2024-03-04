import {
    CreateDateColumn,
    DeleteDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  export class TypeOrmEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @DeleteDateColumn({ nullable: true, name: "deleted_at" })
    deletedAt?: Date;
  
    @CreateDateColumn({ nullable: true, name: "created_at" })
    createdAt?: Date;
  
    @UpdateDateColumn({ nullable: true, name: "updated_at" })
    updatedAt?: Date;
  }
  