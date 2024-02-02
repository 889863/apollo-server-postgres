// src/entities/User.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number = 0; // Initialize with a default value

  @Column()
  username!: string;
}
