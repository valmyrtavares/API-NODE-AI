import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Funcionario {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @Column()
  funcao!: string;

  @Column()
  celular!: string;

  @Column()
  cep!: string;

  @Column('float')
  salario!: number;
}
