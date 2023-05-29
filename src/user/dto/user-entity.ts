import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  // Tambahkan lebih banyak kolom sesuai kebutuhan seperti email, nama lengkap, dll.
}
