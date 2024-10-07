import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Professor {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @Column()
  disciplina!: string;

  @Column()
  cpf!: string;

  @Column()
  celular!: string;
}
