import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nom: string;
  @Column()
  prenom: string;
  @Column()
  sexe: string;
}
